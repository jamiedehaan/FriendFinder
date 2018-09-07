var bodyParser = require(body-parser);
var express = require(express);
var path = require(path);

//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.

app.get("/survey.js", function (req, res) {
    res.send("survey.js")
  })

app.get("/home.html", function (req, res) {
    res.send("home.html")
  })