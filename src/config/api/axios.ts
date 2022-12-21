import ax, {AxiosError, AxiosResponse} from 'axios';
import {useAuth} from '@store/auth';
import {ACCESS_TOKEN} from '@constants/storeKeys';
import {saveToStorage} from '@helpers/storage';
import {env} from '@config/env';

const apiURL = env.API_URL;

const axios = ax.create({
    baseURL: apiURL,
});
axios.interceptors.request.use(
    config => {
        const {accessToken} = useAuth.getState();
        if (!config.url) {
            console.error('request.url is undefined');
        }

        if (accessToken) {
            config.headers!.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err: AxiosError) => Promise.reject(err),
);

axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (err: AxiosError) => {
        const originalRequest = err.config;

        if (
            err.response?.status === 401 &&
            originalRequest?.url?.includes('refresh-token')
        ) {
            return Promise.reject(err);
        }

        if (err.response?.status !== 401) {
            return Promise.reject(err);
        }

        const {accessToken} = useAuth.getState();

        if (accessToken) {
            axios
                .post('/account/refresh-token', {
                    token: accessToken,
                })
                .then(async response => {
                    console.log(
                        'interceptor response ' + JSON.stringify(response),
                    );
                    await saveToStorage(
                        ACCESS_TOKEN,
                        response.data.accessToken,
                    );
                    useAuth.setState({accessToken: response.data.accessToken});
                    useAuth.getState().fetchToken();
                })
                .catch(e => console.log(e));
        } else {
            console.log('refresh token not found');
        }
        return Promise.reject(err);
    },
);

export default axios;
