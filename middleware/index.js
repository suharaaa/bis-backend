const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const path = require('path');

const init = (app) => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/uploads', express.static(path.join(global.appRoot, 'uploads')));
  console.log(path.join(global.appRoot, 'uploads'));
};

module.exports = init;
