export default function loadTestTest(req) {
  return new Promise((resolve) => {
    var mysql = require('mysql');
    var connection = mysql.createConnection({host: '192.168.1.134', database: 'xxx', user: 'xxx', port: 3306, password: 'xxx'});

    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
    });

  connection.end();
  }
}
