import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/detail/user/:id", homeController.getDetailpage);
  router.post("/create-new-user", homeController.createNewUser);
  router.get("/about", (req, res) => {
    res.send("HELO AHA");
  });

  return app.use("/", router);
};

module.exports = initWebRoute;
