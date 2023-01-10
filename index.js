const express = require("express");
const bodyParser = require("body-parser");
const auDetection = require("./au-detection.js");
const app = express();

app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("Working!");
});

app.post("/getAUs", (req, res) => {
  console.log(req.body);
  base64image = req.body.image;
  auDetection.getLandmarksAUs(base64image, res);
});

server = app.listen(3000, "0.0.0.0", function () {
  console.log("Server started on Port: " + 3000);
});
