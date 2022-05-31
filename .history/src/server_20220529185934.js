import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Setup view engine
configViewEngine(app);

initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
