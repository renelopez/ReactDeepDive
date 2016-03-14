'use strict';

let path=require('path');
let constants=require('../constants');

module.exports={
    context:path.join(constants.APP_PATH),
    module:{
        preloaders:[
            {
                test: /\.(jsx)$/,
                exclude:constants.ROOT_PATH + '/node_modules/',
                loader: 'eslint-loader'
            }
        ],
        loaders:[
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)([\?]?.*)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    resolve:{
        extensions:['','.js','.jsx']
    }
};