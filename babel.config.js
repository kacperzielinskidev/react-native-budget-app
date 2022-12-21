const tsconfig = require('./tsconfig.json');

let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

for (let x in rawAlias) {
    alias[x.replace('/*', '')] = rawAlias[x].map(p => p.replace('/*', ''));
}

module.exports = function (api) {
    api.cache(false);
    return {
        env: {
            production: {plugins: ['transform-remove-console']},
        },
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: [
                        '.ts',
                        '.tsx',
                        '.js',
                        '.ios.js',
                        '.android.js',
                        '.json',
                    ],
                    alias,
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
