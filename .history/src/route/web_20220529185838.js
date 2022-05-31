import express from "express";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  router.get("/about", (req, res) => {
    res.send("HELO AHA");
  });

  return app.use("/", router);
};

module.exports = initWebRoute;
