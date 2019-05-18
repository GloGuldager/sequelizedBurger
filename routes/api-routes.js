// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
      db.Burger.findAll({})
        .then(function(dbBurger) {
          res.json(dbBurger);
        });
    });
  

  // POST route for saving a new post
  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body.burger_name).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating posts
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(
      req.params.id,
      {
        where: {
          devoured: true
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};

