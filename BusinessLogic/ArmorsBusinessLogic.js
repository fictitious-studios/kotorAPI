var dataAccess = require("../DataAccess/ArmorsDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js")

exports.GetAllArmors = function() {
    return dataAccess.GetAllArmors()
    .then(armors => {
        return armors.sort(comparators.NameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}

exports.GetArmorById = function(id) {
    return dataAccess.GetArmorById(id)
    .then(armor => {
        return armor;
    })
    .catch(error => {
        throw error;
    });
}