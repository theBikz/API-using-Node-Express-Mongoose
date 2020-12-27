process.env.DB_URI = require("./db/clouddb").DB_URI;

const express = require("express");
const bodyparser = require("body-parser");

var router = express.Router();
require("./api/v1/vacations")(router);

var app = express();
app.use(bodyparser.json());

app.use(router);
app.listen(3000, function () {
  console.log("connection");
});
