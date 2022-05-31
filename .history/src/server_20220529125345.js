const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/index.html"));
});

app.get("/about", (req, res) => {
  res.send("HELO AHA");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
