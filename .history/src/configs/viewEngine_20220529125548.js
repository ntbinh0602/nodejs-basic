import express from "express";

const configViewEngine = (app) => {
  app.set("view engine", "ejs");
};

export default configViewEngine;
