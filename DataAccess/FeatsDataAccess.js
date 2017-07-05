var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.GetAllFeats = function() {
    return dbFactory.GetUserConnection(mongo)
    .then(db => {
        var feats = db.collection("feats").find().toArray();
        db.close();
        return feats;
    })
    .catch(error => {
        throw error;
    });
};