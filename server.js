var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8090;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
