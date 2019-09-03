var express = require('express');
var fs = require('fs')
var path = require('path');
var app = express();
var bodyParser = require('body-parser'); //��post�������������н���
app.get('/', function(req, res) {
    fs.readFile("test", function(err, data) {
        if (err){
        console.log("error!!!");
        }
        else{
        res.json(data);
        }
    })
})
app.listen(8000,127.0.0.1);

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/"+"user.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id]
       let users =JSON.stringify(user);
       console.log( user );
       res.end(users);

   });
})


