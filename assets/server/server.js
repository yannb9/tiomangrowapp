var mysql = require('mysql');
var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cors())

var con = mysql.createConnection({
  host: "134.122.22.176",
  port: "3306",
  user: "yannb_9",
  database: "tiomanGrow",
  password: "yannb_9",
  multipleStatements: true,
});

con.connect((err) => {
  if (!err)
    console.log("Connected!");
  else {
    console.log(err);
  }
});

app.listen(5000, () => { console.log("express server is running @ port # 5000") })

app.get("/getData", (req, res) => {
  con.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows)
    }
    else {
      console.log(err)
    }
  })
})