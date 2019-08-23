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
}) 