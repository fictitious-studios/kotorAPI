var dataAccess = require("../DataAccess/MasksDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js");

exports.getAllMasks = function() {
    return dataAccess.getAllMasks()
    .then(masks => {
        return masks.sort(comparators.nameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}