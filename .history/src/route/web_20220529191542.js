import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {});

  router.get("/about", (req, res) => {
    res.send("HELO AHA");
  });

  return app.use("/", router);
};

module.exports = initWebRoute;
