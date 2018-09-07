const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        app: ['./frontend/index.jsx']
    },
    output: {
        path: path.resolve(__dirname, './content'),
        publicPath: '/',
        filename: '[name].js?[hash]'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: modulePath => {
                if (!/node_modules/.test(modulePath))
                    return false;
                return !['query-string', 'strict-uri-encode']
                    .map(x => RegExp("node_modules.*?" + x).test(modulePath))
                    .reduce((prev, cur) => prev || cur, false);
            }
        },
        {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff2?)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    devtool: '#eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            template: 'frontend/app.html',
            filename: 'app.html'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new MiniCssExtractPlugin({
            filename: "[name].css?[hash]",
            chunkFilename: "[id].css?[hash]"
        }),
        //new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            "root": path.resolve(__dirname, "./frontend"),
            "components": "root/components",
            "services": "root/services"
        }
    },
    performance: {
        maxEntrypointSize: 10000000,
        maxAssetSize: 10000000
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.mode = 'production';
    module.exports.devtool = 'none';

    module.exports.optimization = {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    };
}