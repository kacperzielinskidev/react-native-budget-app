import * as SecureStore from 'expo-secure-store';

export default async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
};
