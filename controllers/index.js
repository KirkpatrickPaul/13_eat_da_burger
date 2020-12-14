const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", async (_, res) => {
  try {
    const burgers = await burger.getAll();
    res.status(200);
    res.json(burgers);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});

router
  .route("/api/burgers/:id?")
  .post(async (req, res) => {
    try {
      const burgerName = req.body.burgerName;
      const newBurgerObj = await burger.createOne(burgerName);
      res.status(201);
      res.render("index", newBurgerObj);
    } catch (error) {
      console.log('req.body :>> ', req.body);
      console.log(error);
      res.status(500);
      res.send(error);
    }
  })
  .put(async (req, res) => {
    try {
      const toDevour = req.params.id;
      const devoured = await burger.updateOne({ eaten: true }, toDevour);
      res.status(200);
      res.json(devoured);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const toDelete = req.params.id;
      const deleted = await burger.deleteOne(toDelete);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send(error);
    }
  });
module.exports = router;
