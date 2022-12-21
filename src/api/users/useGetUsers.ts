import api from '@config/api';
import {useQuery} from '@tanstack/react-query';
import {User} from '@typings/users/user';

export type GetUserResponse = {
    data: User[];
};

const getUsers = () => {
    return api.get<never, GetUserResponse>('/users').then(response => response);
};

export const useGetUsers = () => useQuery(['users'], getUsers);
