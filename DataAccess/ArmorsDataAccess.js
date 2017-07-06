var mongo = require("mongodb");
var dbFactory = require("../DataAccess/Utilities/DbFactory.js");

exports.getAllArmors = function() {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var armors = db.collection("armors").find().toArray();
        db.close();
        return armors;
    })
    .catch(error => {
        throw error;
    });
}

exports.getArmorById = function(id) {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var objectId = new mongo.ObjectID(id);
        var armor = db.collection("armors").findOne({ "_id": objectId });
        db.close();
        return armor;
    })
    .catch(error => {
        throw error;
    });
}

exports.insertArmor = function(armor) {
    return dbFactory.getAdminConnection(mongo)
    .then(db => {
        return new Promise((resolve, reject) => {
            var query = {
                "name": armor.name
            };
            
            var settings = {
                returnOriginal: false,
                upsert: true
            };
            
            db.collection("armors").findOneAndUpdate(query, armor, settings, function(error, result) {
                if(!error) {
                    resolve(result.value);
                }
                else {
                    reject(error);
                }
                
                db.close();
            });
        });
    })
    .catch(error => {
       throw error; 
    });
}