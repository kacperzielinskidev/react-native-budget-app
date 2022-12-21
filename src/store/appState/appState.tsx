import create from 'zustand';

interface AppState {
    isOnboardingFinished: boolean;
    drawerRedirect: string;
}

const initialState = {
    isOnboardingFinished: false,
    drawerRedirect: 'Map',
};

const useAppState = create<AppState>(() => ({
    ...initialState,
}));

export default useAppState;
