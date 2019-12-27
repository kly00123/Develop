var express = require("express");
var router = express.Router();
var fs = require('fs')
var path = require('path');
var mysql = require('mysql');


router.post('/herocheck', function (req, res) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  //console.log(typeof(req.body.hero_name));
  var sql = 'select * from hero_info';
  connection.query(sql, function (err, result) {
    //console.log(sql);
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    final_res = [];
    data = JSON.stringify(result);
    Herolist = JSON.parse(data);
    console.log(req.body);
    if ('hero_id' in req.body) {
      for (var i = 0; i < Herolist.length; i++) {
        if (Herolist[i].hero_id == req.body.hero_id) {
          final_res.push(Herolist[i]);
        }
        else {
          console.log("err!!!!");
        }
      }
    }
    else {
      res.send("不存在该元素！！！");
    }
    res_json = {};
    res_json.arr = final_res;
    res.send(res_json);
  });
})

router.post('/testsearchhero', function (req, res, next) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  // console.log(req.body);
  var sql = 'select * from hero_info';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    if ("id" && "level" in req.body) {
      let num_id = Number(req.body.id);
      let num_level = Number(req.body.level);
      if (num_id > 0 && num_level > 0 && num_id % 1 === 0 && num_level % 1 === 0) {
        //console.log(typeof(result));
        data = JSON.stringify(result);
        Data = JSON.parse(data);
        let user = Data["user" + num_id];
        if (!user) {
          res.send("不存在该英雄！！！")
        }
        else {
          let jsonstr = JSON.stringify(user);
          jsonarr = eval('(' + jsonstr + ')')
          res.json_arr = jsonarr.level[num_level];
          res.send(res.json_arr);
        }
      }
      else {
        res.send("错误！！！")
      }
    }
    else {
      res.send("输入ID或LEVEL!!!!!")
    }
  })
})


router.post('/professioncheck', function (req, res, next) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  var race = req.body.race;
  var sql = "select * from hero_info where race = '" + race + "'";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    data = JSON.stringify(result);
    console.log(result);
    hero_race = JSON.parse(data);
    final_res = [];
    count = 0;
    for (var i = 0; i < hero_race.length; i++) {
       if (req.body.race == hero_race[i].race) {
      tmp_arr = { "hero_name": hero_race[i].hero_name, "hero_id": hero_race[i].hero_id }
      final_res.push(tmp_arr);
       }
    }
    res_json = {};
    res_json.arr = final_res;
    //console.log(res_json);
    res.send(res_json);
  })
});

router.post('/paycheck', function (req, res) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  var sql = 'select * from hero_info';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log(result);
    data = JSON.parse(result);
    console.log(data);
    // console.log(data.herolist.length);
    arr_hero = [];
    final_arr = [];
    total_pay = 0;
    count = 0;
    arr_hero = req.body.name.split(",");
    //  data.herolist[i].name==arr_hero[0];
    for (var i = 0; i < arr_hero.length; i++) {
      for (var j = 0; j < data.herolist.length; j++) {
        if (data.herolist[j].name == arr_hero[i]) {
          count = data.herolist[j].pay + count;
        }
      }
    }
    count = JSON.stringify(count);
    res.send(count);
  })
})

router.post('/fetterscheck', function (req, res) {
  fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

router.post('/fetter', function (req, res, next) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  var sql = "select * from fetter";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    data = JSON.stringify(result);
    fetterlist = JSON.parse(data);
    res.send(fetterlist);
  })
});

router.post('/check', function (req, res, next) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  var sql = "select * from hero_info";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    data = JSON.stringify(result);
    herolist = JSON.parse(data);
    res.send(herolist);
  })
});

router.post('/listcheck', function (req, res) {
  var connection = mysql.createConnection({
    host: '148.70.173.75',
    user: 'root',
    password: 'testapp123',
    port: '3306',
    database: 'self_chess'
  });
  //console.log(typeof(req.body.hero_name));
  var sql = 'select * from hero_info';
  connection.query(sql, function (err, result) {
    //console.log(sql);
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
   var list = [];
    final_arr = [];
    total_pay = 0;
    count = 0;
    var a;
    data = JSON.stringify(result);
    Herolist = JSON.parse(data);
    for (var i in req.body){
      list.push(req.body[i]);
    }
    for (var i = 0; i < list[0].length; i++) {
      for (var j = 0; j < Herolist.length; j++) {
        if (Herolist[j].hero_name == list[0][i]) {
          count = Herolist[j].pay + count;
        }
      }
    }
    count = JSON.stringify(count);
    console.log(count);
    res.send(count);
  });
})
module.exports = router;