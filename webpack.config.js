const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const __DEV__ = process.env.NODE_ENV === 'development';
const __PROD__ = process.env.NODE_ENV === 'production';

// TODO:配置happypack
// TODO:webpack配置放入一个文件夹
const config = {
    entry: './src/index',
    devtool: false,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
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
                    __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
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
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css'
        })
    ]
};

if (__DEV__) {
    config.plugins.push();
}
if (__PROD__) {
}

module.exports = config;
