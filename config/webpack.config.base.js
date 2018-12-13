const path = require('path');
const chalk = require('chalk');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const __DEV__ = process.env.NODE_ENV === 'development';
// const __PROD__ = process.env.NODE_ENV === 'production';
console.log(chalk.cyan('build path:', __dirname));

const baseConfig = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: __DEV__ ? '[name].js' : '[name].[chunkhash:8].js',
        publicPath: '/'
    },
    resolve: {},
    externals: {},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000, // 把小于10000B的文件打成Base64的格式，写入JS
                            name: '[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chunkFilename: '[id].css'
        })
    ]
};

module.exports = baseConfig;
