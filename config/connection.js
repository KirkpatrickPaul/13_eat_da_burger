const mysql = require("mysql");

const connection = mysql.createConnection({
  host: config.host,
  port: 3306,
  user: config.user,
  password: config.pass,
  database: config.db,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
