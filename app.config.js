import 'dotenv/config';

module.exports = {
    expo: {
        extra: {
            API_URL: process.env.API_URL,
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_ANON_PRIVATE_KEY: process.env.SUPABASE_ANON_PRIVATE_KEY,
            SUPABASE_ANON_PUBLIC_KEY: process.env.SUPABASE_ANON_PUBLIC_KEY,
            eas: {
                projectId: '46381478-d624-4a09-9cce-b9b74ef1424e',
            },
        },
    },
};
