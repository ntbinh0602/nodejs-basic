import express from "express";
let router = express.Router();

const initAPIRoute = (app) => {
  router.get("/", homeController.getHomepage);

  return app.use("/api/v1/", router);
};

module.exports = initWebRoute;
