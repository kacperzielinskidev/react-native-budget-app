import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {log} from '@config/logger/logger';
import {useGetProducts} from '@api/public/products/useGetProducts';

const PostsScreen = () => {
    const data = useGetProducts();
    log.info(data);
    return (
        <View style={styles.container}>
            <Text>Siema...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    childContainer: {
        backgroundColor: 'gray',
        flex: 1,
    },
    text: {
        color: 'red',
        fontSize: 15,
    },
});

export default PostsScreen;
