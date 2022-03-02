const http = require('https');
const res = http.request('https://www.google.com',(resq)=>{
    resq.on('data',(chunk)=>{
        console.log(`Data from google:${chunk}`)
    });
    resq.on('end',()=>{
        console.log('no more data')
    })
})
res.end();
// const {get} = require('https');
// get('https://www.google.com',(resq)=>{
//     resq.on('data',(chunk)=>{
//         console.log(`Data from google:${chunk}`)
//     });
//     resq.on('end',()=>{
//         console.log('no more data')
//     })
// })
