var db = require("../models");

module.exports = function(app) {
  // Get all stored beer reviews
  app.get("/api/allBeer", function(req, res) {
    db.Beer.findAll().then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // get beer by Brewery
  app.get("/api/requestByBrewery", function(req, res) {
    db.Beer.findOne({
      where: {
        breweryName: req.body.breweryName
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // get beer by name
  app.get("/api/requestByName", function(req, res) {
    db.Beer.findOne({
      where: {
        beerName: req.body.beerName
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // get beer by style
  app.get("/api/requestByStyle", function(req, res) {
    db.Beer.findOne({
      where: {
        beerStyle: req.body.beerStyle
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // Create a new beer review
  app.post("/api/beer", function(req, res) {
    db.Beer.create({
      breweryName: req.body.breweryName,
      beerName: req.body.beerName,
      beerStyle: req.body.beerStyle,
      review: req.body.review
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });
};