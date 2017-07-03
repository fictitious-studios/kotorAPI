var dataAccess = require("../DataAccess/FeatsDataAccess.js");

exports.GetAllFeats = function() {
    return dataAccess.GetAllFeats();
}