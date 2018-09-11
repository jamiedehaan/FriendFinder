var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./app/public")));

var friendsArray = require("./app/data/friends.js");
require("./app/routing/apiRoutes")(app, friendsArray);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});