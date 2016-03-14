'use strict';

let path=require('path');
let common=require('./common');
let webpack=require('webpack');
let merge=require('webpack-merge');
let constants=require('../constants');
let pkg=require('../package.json');
let CleanWebpackPlugin =require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin=require('html-webpack-plugin');

let distConfig={
    entry: {
        app: path.join(constants.APP_PATH,'/app'),
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: constants.BUILD_PATH,
        filename: '[name].[chunkhash].js?'
    },
    devtool:"source-map",
    plugins: [
        new CleanWebpackPlugin(['build'],{
            root:constants.ROOT_PATH
        }),
        new webpack.DefinePlugin({
            'process.env': {
                // This affects react lib size
                'NODE_ENV': JSON.stringify('production')
            }
        }),
         new webpack.optimize.CommonsChunkPlugin(
         'vendor',
         '[name].[chunkhash].js'
         ),
        new HtmlWebpackPlugin({
            title: 'React Deep Dive App'
        }),
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery",
            "window.jQuery":"jquery"
        }),
        new ExtractTextPlugin('styles.[chunkhash].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module:{
        loaders:[
            {
                test:/\.jsx$/,
                exclude:constants.ROOT_PATH + '/node_modules/',
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: constants.ROOT_PATH + '/node_modules/',
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss/,
                exclude: constants.ROOT_PATH + '/node_modules/',
                loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
            }
        ]
    }

};

module.exports=merge(common,distConfig);
