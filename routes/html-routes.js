// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    db.burgers.findAll({})
      .then(function (dbBurger) {
        res.render("index", dbBurger);
      });
  });
}
  // var models  = require('../models');
  // var express = require('express');
  // var router  = express.Router();

  // router.get('/', function (req, res) {
  //   models.Burger.findAll({
  //     // include: [ models.Task ]
  //   }).then(function (burgers) {
  //     res.render('index', {
  //       title: 'Gottago-Burger',
  //       burgers: burgers
  //     });
  //   });
  // });

  // module.exports = router;

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


