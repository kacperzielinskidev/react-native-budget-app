import PostsScreen from 'screens/PostsScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PostsScreen />
        </QueryClientProvider>
    );
}
