var bodyParser = require(body-parser);
var express = require(express);
var path = require(path);

var app = express();

var htmlRoutes = function(app, path) {
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(_dirname, "survey.html"));
  });

app.get("/*", function (req, res) {
    res.sendFile(path.join(_dirname, "home.html"));
  });
}

module.exports = htmlRoutes;