import {
    MutationFunction,
    MutationKey,
    useMutation,
    UseMutationOptions,
} from '@tanstack/react-query';
import {SubmitHandler} from 'react-hook-form';
import {AxiosResponse} from 'axios';

export default <T, R = AxiosResponse<T>>(
    mutationKey: MutationKey,
    mutationFn: MutationFunction<R, T>,
    options: UseMutationOptions<R, Error, T>,
) => {
    const methods = useMutation<R, Error, T>(mutationKey, mutationFn, options);
    return {
        ...methods,
        mutate: methods.mutate as SubmitHandler<T>,
    };
};
