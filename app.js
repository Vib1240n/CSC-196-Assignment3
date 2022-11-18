"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", (req, res) => {
  const PI = 3.141592653589793;
  var area = PI * req.params.r * req.params.r;
  var circumference = 2 * PI * req.params.r;
  res.send({
    area: area,
    circumference: circumference,
  });
});

// define endpoint for exercise 2 here
app.get("/hello/name/:firstName/:lastName", (req, res) => {
  var first = req.params.firstName;
  var last = req.params.lastName;
  if (first && last) {
    res.send("Hello " + first + " " + last);
  } else if (first) {
    res.send(400).json({ error: "Missing Required GET parameters: last" });
  } else {
    res.send(400).json({ error: "Missing Required GET parameters: first" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
