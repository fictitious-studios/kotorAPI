var dataAccess = require("../DataAccess/GauntletsDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js")

exports.getAllGauntlets = function() {
    return dataAccess.getAllGauntlets()
    .then(gauntlets => {
        return gauntlets.sort(comparators.nameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}