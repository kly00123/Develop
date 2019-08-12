var express = require('express');
var fs = require('fs')
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); //对post请求的请求体进行解析
app.get('/', function(req, res) {
    fs.readFile("test", function(err, data) {
        if (err){
        console.log("error!!!");
        }
        else{
        res.json(data);
        }
    })
}).listen(8000);

app.get('/hero_query', function(req, res) {
    fs.readFile("test.json", function(err, data) {
        if (err){
        console.log("error!!!");
        }
        else{
        res.send(data);
        }
    })
      var str=eval(data);
        for (var i=0;i<str.length;i++){
         if(JSON.stringify(str).indexOf.JSON.stringify(req)!==-1);

        }
})