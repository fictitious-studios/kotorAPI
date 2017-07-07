var dataAccess = require('../DataAccess/FeatsDataAccess.js');
var comparators = require('../BusinessLogic/Utilities/Comparators.js')

exports.getAllFeats = function() {
    return dataAccess.getAllFeats()
    .then(feats => {
        return feats.sort(comparators.nameAscendingComparator);
    })
    .catch(error => {
        throw error;
    });
}