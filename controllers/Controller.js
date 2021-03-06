const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const saltRounds = 13;

// methods for userController

module.exports = {
    login: function(req, res) {
        db.User.findOne({ email: req.body.email })
          .then(dbModel =>
            bcrypt.compare(req.body.password, dbModel.password, (err, result) => {
              if (result === true) {
                res.json(dbModel);
              } else {
                res.send("Incorrect Email or password!");
              }
            })
          )
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            let newUser = {
              password: hash,
              email: req.body.email
            };
            db.User.create(newUser)
              .then(dbModel => res.json(dbModel))
              .catch(err => res.status(422).json(err));
          });
        });
      },
};
