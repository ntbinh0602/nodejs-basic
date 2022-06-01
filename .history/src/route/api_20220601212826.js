import express from "express";
let router = express.Router();
import APIController from "../controller/APIController";

const initAPIRoute = (app) => {
  router.get("/users", APIController.getAllUsers);

  return app.use("/api/v1/", router);
};

module.exports = initAPIRoute;
