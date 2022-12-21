module.exports = {
    env: {
        'jest/globals': true,
    },
    root: true,
    extends: '@react-native-community',
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        'react/react-in-jsx-scope': 0,
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                endOfLine: 'auto',
                semi: true,
            },
        ],
    },
};
