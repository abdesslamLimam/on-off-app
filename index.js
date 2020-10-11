const express = require('express');
const fs = require('fs');
var data = require('./data.json')

const app = express();
app.use(express.json())
app.use(express.urlencoded())
var port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is running at port: ',port)
});

app.get('/',(req,res)=>{
    res.json(data)
});

app.post('/',(req,res)=>{
    console.log(req.body)
    var newdata = JSON.stringify(req.body)
    fs.writeFileSync('./data.json',newdata,'utf-8')
    res.end('done ok')
})