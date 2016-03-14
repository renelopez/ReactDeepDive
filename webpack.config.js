'use strict';

let TARGET = process.env.npm_lifecycle_event;
let config={};

if(TARGET === 'start' || !TARGET){
    config=require('./config/dev');
}

if(TARGET === 'dist'){
    config=require('./config/dist');
}

module.exports=config;