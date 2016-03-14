
/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

let TARGET=process.env.npm_lifecycle_event;
process.env.BABEL_ENV=TARGET;


new WebpackDevServer(webpack(config),{
        contentBase: 'public',
        historyApiFallback: true,
        hot: true,
        publicPath:'/public/assets/js/'
})
    .listen(8080, 'localhost', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:8080');
        console.log('Opening your system browser...');
        open('http://localhost:8080/webpack-dev-server/');
    });