var mongo = require('mongodb');
var dbFactory = require('../DataAccess/Utilities/DbFactory.js');

exports.getAllBelts = function() {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var belts = db.collection('belts').find().toArray();
        db.close();
        return belts;
    })
    .catch(error => {
        throw error;
    });
}

exports.getBeltById = function(id) {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var objectId = new mongo.ObjectID(id);
        var armor = db.collection('belts').findOne({ _id: objectId });
        db.close();
        return armor;
    })
    .catch(error => {
        throw error;
    });
}