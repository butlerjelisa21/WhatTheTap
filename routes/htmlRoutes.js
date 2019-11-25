var db = require("../models");

module.exports = function(app) {
// Load index page
  app.get("/", function(req, res) {
    console.log(req.body);
    db.Beer.findAll({}).then(function(dbthreedogpint) {
      res.render("index", {
        beer: dbthreedogpint
      });
    });
  });

  // Load page and pass in beer by id
  app.get("/beer/:id", function(req, res) {
    db.Beer.findOne({ where: { id: req.params.id } }).then(function(
      dbthreedogpint
    ) {
      console.log(dbthreedogpint);
      res.render("beer", {
        beer: dbthreedogpint
      });
    });
  });

  //  post request by brewery name
  app.post("/api/requestByBrewery:breweryName", function(req, res) {
    console.log(req.body);

    db.Beer.findOne({
      where: {
        breweryName: req.body.breweryName
      }
    }).then(function(dbBeer) {
      res.render("beer", {
        customer: dbBeer
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
