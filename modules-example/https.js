// const request = require('./request');
// const response = require('./response');

// const {send} = require('./request');
// const {read} = require('./response');
// const {REQUEST_TIMEOUT} = require( './request');

//todo ES6 module
// import {send} from './request';
// import {read} from  './response';

// const internals = require('./internals')
const {send,read} = require('./internals')
function makeRequest(url,data){
    send(url,data)
    return read();
}
const respsoneData = makeRequest('www.google.com','hello world')
console.log(respsoneData);
// console.log(require.cache)