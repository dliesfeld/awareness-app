/**
 * @author Dominik Liesfeld
 * @description A config file for the module bundler webpack
 */

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: {
        content: ['./extension/content.ts'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public' }],
        }),
    ],
}
