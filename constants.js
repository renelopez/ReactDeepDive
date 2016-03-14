'use strict';

let path=require('path');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports={
    TARGET:TARGET,
    ROOT_PATH:ROOT_PATH,
    APP_PATH:APP_PATH,
    BUILD_PATH:BUILD_PATH
};