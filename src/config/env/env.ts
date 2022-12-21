import Constants from 'expo-constants';

function getApiUrl() {
    const API_URL = Constants?.expoConfig?.extra?.API_URL;

    if (!API_URL) {
        throw new Error('API_URL is missing.');
    }

    return API_URL;
}

function getSupabaseUrl() {
    const SUPABASE_URL = Constants?.expoConfig?.extra?.SUPABASE_URL;

    if (!SUPABASE_URL) {
        throw new Error('SUPABASE_URL is missing.');
    }

    return SUPABASE_URL;
}

function getSupabaseAnonPrivateKey() {
    const SUPABASE_ANON_PRIVATE_KEY =
        Constants?.expoConfig?.extra?.SUPABASE_ANON_PRIVATE_KEY;

    if (!SUPABASE_ANON_PRIVATE_KEY) {
        throw new Error('SUPABASE_ANON_PRIVATE_KEY is missing.');
    }

    return SUPABASE_ANON_PRIVATE_KEY;
}

// function getSupabaseAnonPublicKey() {
//     const SUPABASE_ANON_PUBLIC_KEY =
//         Constants?.expoConfig?.extra?.SUPABASE_ANON_PUBLIC_KEY;

//     if (!SUPABASE_ANON_PUBLIC_KEY) {
//         throw new Error('SUPABASE_ANON_PUBLIC_KEY is missing.');
//     }

//     return SUPABASE_ANON_PUBLIC_KEY;
// }

export default {
    API_URL: getApiUrl(),
    SUPABASE_URL: getSupabaseUrl(),
    SUPABASE_ANON_PRIVATE_KEY: getSupabaseAnonPrivateKey(),
    // SUPABASE_ANON_PUBLIC_KEY: getSupabaseAnonPublicKey(),
};
