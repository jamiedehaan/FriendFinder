var bodyParser = require(body - parser);
var express = require(express);
var path = require(path);

var app = express();

var friendsArray = require("../data/friends.js")

var apiRoutes = function (app, friendsArray) {
  app.get("/api/friends", function (req, res) {
    return res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    res.sendFile(path.join(_dirname, "/api/friends"));
  });

  var data = req.body;
  var friendName = req.body.name;
  var friendPhoto = req.body.photo;
  var friendScores = data.scores;

  var match = {
    name: "",
    photo: "",
    bestDiff: 1000
  };

  var scoreDiff;
  for (var i = 0; i < friendsArray.length; i++) {
    var checkFriend = friends[i];
    newDiff = 0;
    console.log(checkFriend);
    for (var j = 0; j < checkFriend.scores.length; j++) {
      var checkFriendScore = checkFriend.scores[j];
      var currentUserScore = newUserScores[j];
      newDiff += Math.abs(parseInt(currentUserScore) - parseInt(checkFriendScore));
      console.log(newDiff)
    }
    if (newDiff <= match.bestDiff) {
      match.name = checkFriend.name;
      match.photo = checkFriend.photo;
      match.bestDiff = newDiff;
    }
  }

  console.log(match)
  friendsArray.push(data);
  res.json(match);

  module.exports = apiRoutes;