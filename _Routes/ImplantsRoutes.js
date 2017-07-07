var businessLogic = require('../BusinessLogic/ImplantsBusinessLogic.js');

module.exports = function(app) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get('/implants', function(req, res) {
        businessLogic.getAllImplants()
        .then(implants => {
            res.json(implants);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}