const express = require('express');
const fs = require('fs');
// var data = require('./data.json')
var data = {status:"OFF"}
const app = express();
app.use(express.json())
app.use(express.urlencoded())
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));
var port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server is running at port: ',port)
});

app.get('/',(req,res)=>{
    res.json(data)
});

app.post('/',(req,res)=>{
    console.log(req.body)
    var newdata = req.body.status
    data['status'] = newdata;
    console.log(data)
    // fs.writeFileSync('./data.json',newdata,'utf-8')
    res.json({'ok':'done ok'})
})