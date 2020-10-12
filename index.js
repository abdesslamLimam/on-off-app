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
app.use(function (req, res, next) {

   
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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
    res.end('done ok')
})