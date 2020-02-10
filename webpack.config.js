const fs = require('fs');
const path = require('path');

const convertRootPath = filename => path.resolve(__dirname, filename);

module.exports = () => {
    return {
        entry: './src/integrate/index.tsx',
        output: {
            path: convertRootPath('dist'),
            filename: 'index.js',
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            ...JSON.parse(fs.readFileSync(convertRootPath('./.babelrc'))),
                        },
                    },
                    exclude: {
                        include: /node_modules/,
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: [{loader: 'babel-loader'}, {loader: 'ts-loader'}],
                    include: [convertRootPath('src')],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        devServer: {
            port: 3001,
            host: '0.0.0.0',
            disableHostCheck: true,
            contentBase: ['dist', 'static'],
        },
        performance: {
            hints: false,
        },
    };
};
