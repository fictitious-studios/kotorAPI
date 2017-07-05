var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.GetAllBelts = function() {
    return dbFactory.GetUserConnection(mongo)
    .then(db => {
        var belts = db.collection("belts").find().toArray();
        db.close();
        return belts;
    })
    .catch(error => {
        throw error;
    });
};