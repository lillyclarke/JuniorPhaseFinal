const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const app = express();

app.use(volleyball);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

app.use((req, res, next) => {
  const err = new Error("Not found.");
  res.status(404).end();
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
