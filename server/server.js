const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    error: "Page not found"
  });
});

app.listen(3000);

module.exports.app = app;
