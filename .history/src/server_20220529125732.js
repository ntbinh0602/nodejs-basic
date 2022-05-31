import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = 8080;

configViewEngine(app);
app.get("/", (req, res) => {});

app.get("/about", (req, res) => {
  res.send("HELO AHA");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
