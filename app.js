const express = require("express");
const { dummyBooks } = require("./db/data");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello EROZGAAR TEAM MATES now this is coming for us");
});

app.get("/books", (req, res) => {
  res.send(dummyBooks);
});

app.listen(3000);
