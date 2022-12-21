import {useQuery} from '@tanstack/react-query';
import api from '../../../config/api';

export const getProductsKey = ['products'];

const getProducts = () => {
    return api
        .get(
            'https://nehtzvcvmsxdvwmiwsob.supabase.co/rest/v1/products?select=*',
        )
        .then(response => response);
};

export const useGetProducts = () => useQuery(['products'], getProducts);
