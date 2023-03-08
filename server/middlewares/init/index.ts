import express, { json, urlencoded } from "express";

const bodyParsingHandler = [json({ limit: '10mb' }), urlencoded({ extended: false })];
const checks = (req, res, next) => {
  const { db } = req.app;
  if (db == null) {
    throw Error("You must bind the router db to the app");
  }
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).jsonp(err.message);
};

export default express
  .Router()
  .use(bodyParsingHandler)
  .use(checks)
  .use(errorHandler);
