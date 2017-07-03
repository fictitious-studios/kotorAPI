var dataAccess = require("../DataAccess/BeltsDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js")

exports.GetAllBelts = function() {
    return dataAccess.GetAllBelts()
    .then(belts => {
        return belts.sort(comparators.NameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}