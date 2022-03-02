// module.exports = {
//     request:require('./request'),
//     response:require('./response')
// }

// const request = require('./request')
// const response = require('./response')
// module.exports={
//     REQUSET_TIMEOUT: request.REQUEST_TIMEOUT,
//     send: request.send,
//     read: response.read,
// }

module.exports={
    ...require('./request'),
    ...require('./response'),
}