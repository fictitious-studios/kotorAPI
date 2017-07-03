var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.GetAllFeats = function() {
    return dbFactory.GetMongoDevConnection(mongo)
    .then((db) => {
        return new Promise((resolve, reject) => {
            resolve(db.collection("feats").find().toArray());
            db.close(); 
        });
    })
    .catch((error) => {
        console.log(error);
        return [];
    });
};