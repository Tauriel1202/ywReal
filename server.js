const express = require('express');
const app = express();
const port = 1218;
const cors = require('cors');
const bodyParser = require("body-parser");

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

app.listen(port, (req, res) => {
  console.log(`🎵Listening on Port: ${port}🎵`);
});