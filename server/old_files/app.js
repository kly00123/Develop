const express = require('express');
const fs = require('fs')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const url = require('url');
const util = require('util');
app.get('/', function (req, res) {
    fs.readFile("user.json", function (err, data) {
        if (err) {
            //  console.log("error!!!");
        }
        else {
            res.json(data);
        }
    })
})
app.listen(8000, '127.0.0.1');

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        let user = data["user" + req.params.id]
        let users = JSON.stringify(user);
        console.log(data);
        res.end(users);

    });
})

app.get('/:id' + '/:level', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        let jsonobj_fy = JSON.stringify(data);
        var jsonarr = eval(jsonobj_fy);

        //x = jsonObj["user" + req.params.id].level[1];
    });
})

app.get('/:profession', function (req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        let jsonTarget = [];
        let jsonObj = JSON.parse(data);
        let ids = "";
        for (let i = 0; i < jsonObj.length; i++) {
            ids += jsonObj[i].profession + ",";
        }
        ids = ids.substring(0, ids.length - 1);
        //     console.log(ids);
        //   console.log(jsonObj.length);
    });
})



