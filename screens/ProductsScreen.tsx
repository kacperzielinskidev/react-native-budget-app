import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const ProductsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, world!</Text>
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

export default ProductsScreen;
