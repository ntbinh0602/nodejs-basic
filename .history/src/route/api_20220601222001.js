import express from "express";
let router = express.Router();
import APIController from "../controller/APIController";

const initAPIRoute = (app) => {
  router.get("/users", APIController.getAllUsers); // method GET => READ data
  router.post("/create-user", APIController.createNewUser); // method POST => CREATE data
  router.put("/update-user", APIController.updateUser); // method POST => UPDATE data
  router.delete("/delete-user/:id", APIController.deleteUser); // method POST => CREATE data

  return app.use("/api/v1/", router);
};

module.exports = initAPIRoute;
