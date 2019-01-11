const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    error: "Page not found",
    name: "Todo App v1.0"
  });
});

app.get("/users", (req, res) => {
  res.status(200).send([
    {
      name: "Cody",
      age: 33
    },
    {
      name: "Scarlett",
      age: 44
    },
    {
      name: "Indigo",
      age: 1
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
