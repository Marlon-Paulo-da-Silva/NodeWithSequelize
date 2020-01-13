const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ salve: "Marlon" });
});

module.exports = routes;
