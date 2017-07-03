var dataAccess = require("../DataAccess/ArmorsDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js")

exports.GetAllArmors = function() {
    return dataAccess.GetAllArmors()
    .then((armors) => {
        return armors.sort(comparators.NameAscendingComparator);
    })
    .catch((error) => {
        return error;
    });
}

exports.GetArmorById = function(id) {
    return dataAccess.GetArmorById(id)
    .catch((error) => {
        return error;
    });
}