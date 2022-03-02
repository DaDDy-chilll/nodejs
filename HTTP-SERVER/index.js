const http = require('http');
const PORT = 3000;
const server = http.createServer();
const friends = [
    {
        id:0,
        name:'Estin',
    },
    {
        id:1,
        name:'Isacc Newton',
    },
    {
        id:3,
        name:'Tesla',
    }
];
server.on('request',(req, res)=>{
    const items = req.url.split('/')
    // /friends/2 => ['','friend','2']
    if(req.method === 'POST'&& items[1] === 'friends'){
        req.on('data',(data)=>{
            const frined = data.toString();
            console.log('Request',frined);
            friends.push(JSON.parse(frined));
        });
        // req.pipe(res);
    }else if(req.method === 'GET' && items[1] === 'friends'){
        // res.writeHead(200,{
        //     'Content-Type':'application/json',
        // });
        res.statusCode = 200;
        res.setHeader ('Content-Type','application/json')
        if(items.length === 3){
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]));
        }else{
            res.end(JSON.stringify(friends));
        }
    }else if(items[1] === 'message'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>hello Newton</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode = 404;
        res.end(); 
    }
});
server.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
})

