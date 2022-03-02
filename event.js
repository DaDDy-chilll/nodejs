const EventEmitter = require('events');
const celebrity = new EventEmitter();
process.on('exit',(code)=>{
    console.log('process exit event with code:',code);
})
celebrity.on('race',(result)=>{
    if(result == 'win'){
        console.log('1st winner')
    }
})

celebrity.on('race',(result)=>{
    if(result == 'win'){
        console.log('2st winner')
    }
})
celebrity.emit('race', 'win');
celebrity.emit('race lost');
