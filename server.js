var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = "mongodb://localhost:27017/employees";
mongoose.connect(config)
        mongoose.connection
            .on('connected',function(){
                console.log("sucessfully connected to "+config)
            })
            .on('error',function(err){
                console.log("database error "+err)
            })
var app = express();
var port = 3000;
app.get('/', function(req,res){
    res.send("hello");
});

var router = require('./routes');
//middleware
app.set(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/employees', router);
app.listen(port,function(){
    console.log("Server is Running "+port);
})