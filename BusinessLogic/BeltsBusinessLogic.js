var dataAccess = require('../DataAccess/BeltsDataAccess.js');
var comparators = require('../BusinessLogic/Utilities/Comparators.js')

exports.getAllBelts = function() {
    return dataAccess.getAllBelts()
    .then(belts => {
        return belts.sort(comparators.nameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}