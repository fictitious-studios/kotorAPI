var mongo = require('mongodb');
var dbFactory = require('../DataAccess/Utilities/DbFactory.js');

exports.getAllImplants = function() {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var implants = db.collection('implants').find().toArray();
        db.close();
        return implants;
    })
    .catch(error => {
        throw error;
    });
}