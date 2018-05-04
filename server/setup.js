const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const session = require("express-session");
const url = require("url");
const mongoose = require("mongoose");
const cors = require("cors");
const socket = require("socket.io");

const handlers = require("./handlers");
const app = express();
const server = http.createServer(app);
const io = socket.listen(server);

//middleware
app.use(cors());
app.use("/", express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

app.all("*", function(req, res, next) {
  var route = req.originalUrl.split("/");
  if (route[1] !== "api") {
    app.use(req.originalUrl, express.static(__dirname + "/../client/dist"));
  }
  next();
});

// Connect to Mongoose
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://jeme:123@ds115918.mlab.com:15918/markstore"
);
var db = mongoose.connection;

server.listen(process.env.PORT || 8000, () => {
  console.log("Running on port 8000...");
});

module.exports = app;
module.exports.handlers = handlers;
module.exports.io = io;
