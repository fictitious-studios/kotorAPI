var mongo = require('mongodb');
var dbFactory = require('../DataAccess/Utilities/DbFactory.js');

exports.getAllFeats = function() {
    return dbFactory.getUserConnection(mongo)
    .then(db => {
        var feats = db.collection('feats').find().toArray();
        db.close();
        return feats;
    })
    .catch(error => {
        throw error;
    });
};