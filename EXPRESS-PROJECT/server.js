const express = require('express');
const app = express();
const PORT = 3000;
const companies = [
    {
        id:0,
        name:'microsoft',
    },
    {
        id:1,
        name:'cisco',
    },
    {
        id:2,
        name:'mingo',
    }
];
app.use((req,res,next)=>{
    const prev = new Date().getSeconds();
    console.log(prev)
    console.log(`${req.method} ${req.url}`)
    next();
    const newt = new Date().getSeconds();
    console.log(newt)
})
app.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`)
})
app.get('/companies',(req, res)=>{
    res.json(companies);
})
app.get('/companies/:companyid',(req, res)=>{
    const companyID = req.params.companyid;
    const companyValue = companies[companyID];
    if(companyValue){
        res.status(200).json(companyValue)
    }else{
        res.status(404).json({
            error:'compay doesn\'t exist'
        })
    }
})
app.use(express.json())
app.post('/companies',(req, res)=>{
    if(!req.body.name){
        return res.status(200).json({
            error:"missin company"
        })
    }
    const newCompany = {
        name: req.body.name,
        id: companies.length
    };
    companies.push(newCompany)
    res.json(newCompany)
})
app.get('/message',(req, res)=>{
    res.send('<ul><li>HELLO WORLD</li></ul>')
})
app.post('/message',(req, res)=>{
    console.log('updating message')
})