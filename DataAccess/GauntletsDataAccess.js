var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.getAllGauntlets = function() {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var gauntlets = db.collection("gauntlets").find().toArray();
        db.close();
        return gauntlets;
    })
    .catch(error => {
        throw error;
    });
};