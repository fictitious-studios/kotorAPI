var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.getAllMasks = function() {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var masks = db.collection("masks").find().toArray();
        db.close();
        return masks;
    })
    .catch(error => {
        throw error;
    });
}