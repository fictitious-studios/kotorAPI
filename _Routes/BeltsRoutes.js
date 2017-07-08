var businessLogic = require('../BusinessLogic/BeltsBusinessLogic.js');

module.exports = function(app) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get('/belts', function(req, res) {
        businessLogic.getAllBelts()
        .then(belts => {
            res.json(belts);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    app.get('/belts/:id', function(req, res) {
        businessLogic.getBeltById(req.params.id)
        .then(belts => {
            res.json(belts);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}