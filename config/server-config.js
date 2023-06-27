const cors = require("cors");
const express = require("express");

const corsConfig = {
  methods: ["HEAD", "GET"],
};

const configureServer = (app) => {
  app.use(cors(corsConfig));
  app.use(express.json());
};

module.exports = {
  configureServer,
};