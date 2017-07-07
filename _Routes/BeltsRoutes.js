var businessLogic = require('../BusinessLogic/BeltsBusinessLogic.js');

module.exports = function(app) {
    app.get('/belts', function(req, res) {
        businessLogic.getAllBelts()
        .then(belts => {
            res.json(belts);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}