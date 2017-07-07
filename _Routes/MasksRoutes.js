var businessLogic = require('../BusinessLogic/MasksBusinessLogic.js');

module.exports = function(app) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get("/masks", function(req, res) {
        businessLogic.getAllMasks()
        .then(masks => {
            res.json(masks);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}