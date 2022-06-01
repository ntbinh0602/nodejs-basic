import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
require("dotenv").config();
// import connection from "./configs/connectDB";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup view engine
configViewEngine(app);

// Init web route
initWebRoute(app);

initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
