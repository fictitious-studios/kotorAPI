var dataAccess = require("../DataAccess/FeatsDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js")

exports.GetAllFeats = function() {
    return dataAccess.GetAllFeats()
    .then(feats => {
        return feats.sort(comparators.NameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}