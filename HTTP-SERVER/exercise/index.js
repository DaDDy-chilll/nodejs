const http = require('http');
const server = http.createServer()
const PORT = 8000;
const persons = [
    {
        id:0,
        name:'Facebook',
    },
    {
        id:1,
        name:'Apple',
    },
    {
        id:2,
        name:'Google',
    },
];
server.on('request',(req, res)=>{
    const item = req.url.split('/');
    if(req.method === 'POST' && item[1] === 'persons'){
        req.on('data',(data)=>{
            const person = data.toString();
            persons.push(JSON.parse(person));
        });
        req.pipe(res);
    }else if(req.method === 'GET' && item[1] === 'persons'){
        res.statusCode =200;
        res.setHeader('Content-Type','application/json');
        if(item.length === 3){
            personIndex = +item[2];
            res.end(JSON.stringify(persons[personIndex]));
        }else{
            res.end(JSON.stringify(persons));

        }
    }else if(req.method === 'GET' && item[1] === 'listcontent'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello World</li>');
        res.write('<li>Hi Nice to see you</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode=404;
        res.end();
    }
})
server.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`)
})