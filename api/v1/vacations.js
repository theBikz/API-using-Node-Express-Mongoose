var RESOURCE_NAME = 'vacations';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME;

var db = require('../../db/vactaions');

module.exports = function(router) {
    'use strict'

    router.route(URI).get(function(req, res, next) {
        console.log("GET vacations");

        var criteria = { validTill: {$gte: new Date()}}

        db.select(criteria, function(err, docs) {
            if(err) {
                console.log(err);
                res.status(500);
                res.send("error connecting to db")
            } else {
                if(docs.length == 0) {
                    res.status(400)
                }
                console.log("Retrieved vactions = %d", docs.length);
                res.send(docs)
            }
        })
    })

    router.route(URI).post(function(req, res, next){
        console.log("Post vacations");

        var doc = req.body;

        db.save(doc, function(err, saved) {
            if(err){
                
            }
        })
    })
}
