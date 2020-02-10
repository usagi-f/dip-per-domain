const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = filename => path.resolve(__dirname, filename);

const integrateDir = './src/integrate';

module.exports = () => {
    return {
        entry: `${integrateDir}/index.tsx`,
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
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: convertRootPath(`${integrateDir}/index.html`),
            }),
        ],
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
