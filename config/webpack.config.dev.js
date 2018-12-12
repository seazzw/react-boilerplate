const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const inProject = str => path.join(process.cwd(), str);

// TODO:配置happypack
// TODO:webpack配置放入一个文件夹
module.exports = merge(baseConfig, {
    mode: 'development',
    entry: inProject('src/index.js'),
    devtool: 'source-map'
});
