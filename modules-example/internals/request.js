const REQUEST_TIMEOUT = 500;
function encrypt(data){
    return 'encrypted data'
}
function send(url,data){
const encrypted = encrypt(data);
console.log(`sending ${encrypted} to ${data} to ${url}`)
}
module.exports={
    REQUEST_TIMEOUT,
    send,//name is same cuz shotant write;
}

//todo ES6 module
// export {
//     REQUEST_TIMEOUT,
//     send,//name is same cuz shotant write;
// }
console.log('hello response.js')