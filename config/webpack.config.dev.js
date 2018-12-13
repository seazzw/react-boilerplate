const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const inProject = str => path.join(process.cwd(), str);

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: inProject('src/index.js'),
    devtool: 'source-map'
});
