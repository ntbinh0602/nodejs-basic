import express from "express";
import configViewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
