var express = require("express");
var router = express.Router();
var fs = require('fs')
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
module.exports = router;
app.use(bodyParser.urlencoded({ extended: false }));  
function file_handler()
{

}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 
router.post('/testsearchhero', function(req, res) {
  fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    var hero_id = req.body.id;
    var hero_level=req.body.level;
    let user = data["user" + hero_id];
    let jsonstr = JSON.stringify(user);
    jsonarr=eval('('+jsonstr+')')
    res.json_arr=jsonarr.level[hero_level];
    res.send(res.json_arr);
  // resp_json_arr = []
  // resp_json_arr["HP"] = 100;
  // resp_json_arr["MP"] = 200;

  // res.json(resp_json_arr);
  // res.send(resp_json_arr);
})
})
 module.exports = router;
