'use strict';

let path=require('path');
let common=require('./common');
let webpack=require('webpack');
let merge=require('webpack-merge');


let devConfig={
    entry:{
        bundle:['webpack-dev-server/client?http://127.0.0.1:8080',
            'webpack/hot/only-dev-server',
            './app.js']
    },
    output:{
        path:path.resolve('build/js/'),
        publicPath:'/public/assets/js/',
        filename:'[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude:constants.ROOT_PATH + '/node_modules/',
                include:constants.APP_PATH,
                loader:'react-hot!babel-loader'
            },
            {
                test: /\.css$/,
                exclude: __dirname + '/node_modules/',
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss/,
                exclude: __dirname + '/node_modules/',
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports=merge(common,devConfig);