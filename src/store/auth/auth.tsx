import create from 'zustand';
import * as SecureStore from 'expo-secure-store';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '@constants/storeKeys';

interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    isPending: boolean;
    fetchToken(): void;
    logout(): void;
}

const initialState = {
    isLoggedIn: false,
    isPending: false,
    accessToken: null,
    refreshToken: null,
};

const useAuth = create<AuthState>(set => ({
    ...initialState,
    logout: async () => {
        set(state => ({
            ...state,
            isLoggedIn: false,
            accessToken: null,
            refreshToken: null,
        }));
        await SecureStore.deleteItemAsync(ACCESS_TOKEN);
        await SecureStore.deleteItemAsync(REFRESH_TOKEN);
    },
    login: async (token: string, refToken?: string) => {
        set(state => ({
            ...state,
            isLoggedIn: true,
            accessToken: token,
            refreshToken: refToken,
        }));
        await SecureStore.setItemAsync(ACCESS_TOKEN, token);
        refToken && (await SecureStore.setItemAsync(REFRESH_TOKEN, refToken));
    },
    fetchToken: async () => {
        set(state => ({...state, isPending: true}));
        try {
            const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN);
            if (accessToken) {
                set(state => ({
                    ...state,
                    accessToken: accessToken,
                    isLoggedIn: true,
                }));
            }
        } catch (e) {
            throw new Error('Something went wrong');
        } finally {
            set(state => ({...state, isPending: false}));
        }
    },
}));

export default useAuth;
