var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.GetAllArmors = function() {
    return dbFactory.GetMongoDevConnection(mongo)
    .then(db => {
        var armors = db.collection("armors").find().toArray();
        db.close();
        return armors;
    })
    .catch(error => {
        throw error;
    });
}

exports.GetArmorById = function(id) {
    return dbFactory.GetMongoDevConnection(mongo)
    .then(db => {
        var objectId = new mongo.ObjectID(id);
        var armor = db.collection("armors").find({ "_id": objectId }).toArray();
        db.close();
        return armor;
    })
    .catch(error => {
        throw error;
    });
}