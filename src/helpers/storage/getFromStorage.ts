import * as SecureStore from 'expo-secure-store';

export default async (key: string) => {
    return SecureStore.getItemAsync(key);
};
