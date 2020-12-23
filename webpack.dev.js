const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new Dotenv({
            path: "./dev.env"
        })
    ]
})
