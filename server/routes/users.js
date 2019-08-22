var express = require("express");
var router = express.Router();
var fs = require('fs')
var path = require('path');
var app = express();
var mysql  = require('mysql');  
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/testsearchhero', function (req, res, next) {
  fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
    if ("id" && "level" in req.body) {
      let num_id = Number(req.body.id);
      let num_level = Number(req.body.level);
      if (num_id > 0 && num_level > 0 && num_id % 1 === 0 && num_level % 1 === 0) {
        data = JSON.parse(data);
        let user = data["user" + num_id];
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
module.exports = router;

router.post('/professioncheck', function (req, res, next) {
  fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    final_res = [];
    count = 0;
    for (var user in data) {
      count++;
      if (req.body.profession == data[user].profession) {
        final_res.push(data[user].name);
      }
    }
    res_json = {};
    res_json.arr = final_res;
    console.log(final_res);
    res.send(res_json);
  })
});

router.post('/fetterscheck', function (req, res) {
  fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

router.post('/paycheck',function(req,res){
  fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data){
        data=JSON.parse(data);
       // console.log(data.herolist.length);
        arr_hero=[];
        final_arr=[];
        total_pay=0;
        count = 0;
        arr_hero=req.body.name.split(",");
      //  data.herolist[i].name==arr_hero[0];
      for (var i=0;i<arr_hero.length;i++){
         for (var j=0;j<data.herolist.length;j++){
            if(data.herolist[j].name==arr_hero[i]){
                  count=data.herolist[j].pay+count;
            }
         }
      }
      count=JSON.stringify(count);
      res.send(count);
  })
})

router.post('/herocheck', function (req, res) {
  var connection = mysql.createConnection({
    host     : '148.70.173.75',
    user     : 'root',
    password : 'testapp123',
    port     :'3306',
    database : 'self_chess'
  });
  let num_id = Number(req.body.id);
  var sql ='select * from hero_info';
  connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    final_res = [];
    data=JSON.stringify(result);
    Herolist=JSON.parse(data);
  // console.log(Herolist.length);
  if ('hero_name' in req.body){
  for (var i=0;i<Herolist.length;i++){
    if (Herolist[i].hero_name==req.body.hero_name){
      final_res.push(Herolist[i]);
    }
    else{
      console.log("err!!!!");
    }
    res_json = {};
    res_json.arr = final_res;
    console.log(final_res);
    res.send(res_json);
  }
}
else
{
res.send("不存在该元素！！！");
}
   // console.log(Herolist[0]);
   // res.end(data);
    //resolve(result);//关键
 
  });
 // console.log(req.body.hero_name);

  connection.end();
 })


