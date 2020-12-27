var RESOUCE_NAME = "vacations";
var VERSION = "v1";
var URI = "/" + VERSION + "/" + RESOUCE_NAME;

var db = require("../../db/vacations");

module.exports = (router) => {
  "use strict";

  //Retrieve all action vacation packages
  //Active = validTill >= Todays Date

  // /v1/vacations
  router.route(URI).get((req, res, next) => {
    console.log("GET Vacations");

    var criteria = { validTil: { $gte: new Date() } };

    db.select(criteria, (err, docs) => {
      if (err) {
        console.log(err);
        res.status(500);
        res.send(err);
      } else {
        if (docs.length == 0) {
          res.status(404);
        }
        console.log("Retrieved vacations");
      }
    });
  });

  router.route(URI).post((req, res, next) => {
    console.log("Post Vacations");

    var doc = req.body;

    db.save(doc, (err, saved) => {
      if (err) {
        res.status(400).send(err);
      }
    });
  });
};
