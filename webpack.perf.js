const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = merge(common, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})
