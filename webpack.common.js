const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/icons' }],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath) => Boolean(resPath.includes('.module.')),
                                localIdentName: '[path][name]__[local]--[hash:base64:8]',
                                namedExport: false,
                            },
                        },
                    },
                    'sass-loader',
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
};
