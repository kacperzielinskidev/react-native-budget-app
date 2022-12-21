import create from 'zustand';

interface ErrorState {
    error: Error | string | null;

    setError(error: string): void;

    clearError(): void;
}

const initialState = {
    error: null,
};

const useError = create<ErrorState>(set => ({
    ...initialState,
    setError: (error: string) => set(state => ({...state, error})),
    clearError: () => set(state => ({...state, error: null})),
}));

export default useError;
