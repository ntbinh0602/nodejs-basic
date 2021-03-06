import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = process.env.PORT;

configViewEngine(app);
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.send("HELO AHA");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
