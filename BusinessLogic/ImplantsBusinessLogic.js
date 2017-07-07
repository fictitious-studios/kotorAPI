var dataAccess = require('../DataAccess/ImplantsDataAccess.js');
var comparators = require('../BusinessLogic/Utilities/Comparators.js');

exports.getAllImplants = function() {
    return dataAccess.getAllImplants()
    .then(implants => {
        return implants.sort(comparators.nameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}
