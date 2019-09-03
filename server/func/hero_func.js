function check_hero(req, res) {
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var hero_id = req.body.id;
        var hero_level = req.body.level;
        let user = data["user" + hero_id];
        let jsonstr = JSON.stringify(user);
        jsonarr = eval('(' + jsonstr + ')')
        res.json_arr = jsonarr.level[hero_level];
        res.send(res.json_arr);
    })
};
module.exports = check_hero;