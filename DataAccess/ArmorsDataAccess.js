var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.GetAllArmors = function() {
    return  dbFactory.GetMongoDevConnection(mongo)
    .then(function(db) {
        return new Promise((resolve, reject) => {
            resolve(db.collection("armors").find().toArray());
            db.close();
        });
    })
    .catch((error) => {
        console.log(error);
        return [];
    });
}

exports.GetArmorById = function(id) {
    return  dbFactory.GetMongoDevConnection(mongo)
    .then(function(db) {
        return new Promise((resolve, reject) => {
            var objectId = new mongo.ObjectID(id);
            resolve(db.collection("armors").find({ "_id": objectId }).toArray());
            db.close();
        });
    })
    .catch(function(error) {
        console.log(error);
        return [];
    });
}