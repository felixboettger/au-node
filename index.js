const express = require("express");
const bodyParser = require("body-parser");
const auDetection = require("./au-detection.js");
const app = express();

app.use(bodyParser.json({ limit: "100mb" }));

app.get("/test", (req, res) => {
  res.send("Working!");
});

app.post("/getAUs", (req, res) => {
  console.log("Request to /getAUs");

  base64image = req.body.image;
  console.log("Image received");
  console.log("Image: " + base64image[0] + base64image[1] + base64image[2]);

  auDetection.getLandmarksAUs(base64image, res);
});

server = app.listen(3000, "0.0.0.0", function () {
  console.log("Server started on Port: " + 3000);
});
