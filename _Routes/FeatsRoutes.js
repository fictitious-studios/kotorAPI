var businessLogic = require('../BusinessLogic/FeatsBusinessLogic.js');

module.exports = function(app) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get('feats', function(req, res) {
        businessLogic.getAllFeats()
        .then(feats => {
            res.json(feats);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}