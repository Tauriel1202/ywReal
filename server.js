const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const dotenv = require('dotenv').config();
const port = 1218;
const cors = require("cors");
const path = require('path');

app.use(express.static("frontend/build"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "html");
app.use(bodyParser.json());
app.options("*", cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

//app get paths
app.get("/", (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
app.get("/survey", sendFile);
app.get('/done', sendFile)

function sendFile(req, res) {
  res.setHeader("Content-type", "text/html");
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
}

//mongo
const mongo = require("./mongo.js");
app.get("/survey", mongo.addAnswer);

app.listen(port, (req, res) => {
  console.log(`🎵Listening on Port: ${port}🎵`);
});
