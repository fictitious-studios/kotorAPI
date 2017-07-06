var dataAccess = require("../DataAccess/ArmorsDataAccess.js");
var comparators = require("../BusinessLogic/Utilities/Comparators.js");

exports.getAllArmors = function() {
    return dataAccess.getAllArmors()
    .then(armors => {
        return armors.sort(comparators.nameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}

exports.getArmorById = function(id) {
    return dataAccess.getArmorById(id)
    .then(armor => {
        return armor;
    })
    .catch(error => {
        throw error;
    });
}

exports.insertArmor = function(armor) {
    return dataAccess.insertArmor(armor)
    .then(result => {
        return result;
    })
    .catch(error => {
        throw error;
    });
}