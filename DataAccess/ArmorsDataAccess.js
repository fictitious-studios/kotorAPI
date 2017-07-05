var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.GetAllArmors = function() {
    return dbFactory.GetUserConnection(mongo)
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
    return dbFactory.GetUserConnection(mongo)
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

exports.InsertArmor = function(armor) {
    return dbFactory.GetAdminConnection(mongo)
    .then(db => {
        db.collection("armors").updateOne({ "name": armor.name }, armor, { "upsert" : true }, function(error, result) {
            if(!error) {
                return result;
            }
            else {
                throw error;
            }
        });
        db.close();
    })
    .catch(error => {
       throw error; 
    });
}