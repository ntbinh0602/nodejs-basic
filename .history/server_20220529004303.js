const express = require("express");
const app = express();
const port = 8259;

app.get("/", (req, res) => {
  res.send("Hello World! vs Eric");
});

app.get("/about", (req, res) => {
  res.send("HELO AHA");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
