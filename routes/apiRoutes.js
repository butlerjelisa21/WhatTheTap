var db = require("../models");

module.exports = function(app) {
  // Get all stored beer reviews
  app.get("/api/allBeer", function(req, res) {
    db.Beer.findAll().then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // get beer by Brewery
  app.get("/api/requestByBrewery/:breweryName", function(req, res) {
      console.log(req.params.breweryName);

    db.Beer.findAll({
      where: {
        breweryName: req.params.breweryName
      }
    }).then(function(dbBeer) {
      res.json(dbBeer); 
    });
  });

  // get beer by name
  app.get("/api/requestByName/:beerName", function(req, res) {
    console.log(req.params.beerName);

    db.Beer.findAll({
      where: {
        beerName: req.params.beerName
      }
    }).then(function(dbBeer) {
      res.json(dbBeer);
    });
  });

  // get beer by style
  app.get("/api/requestByStyle/:beerStyle", function(req, res) {
    console.log(req.params.beerStyle);
    db.Beer.findAll({
      where: {
        beerStyle: req.params.beerStyle
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


// Post user login
app.post("/api/userEmail", function(req, res){
    db.User.create({
       email: req.body.email,
       password: req.body.password,
    }).then(function(dbUser){
        res.json(dbUser);
    });
});

// Get user login
app.get("/api/requestUser/:email", function(req, res) {
    console.log(req.params.email);

    db.Beer.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};