var businessLogic = require("../BusinessLogic/GauntletsBusinessLogic.js");

module.exports = function(app) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get("/gauntlets", function(req, res) {
        businessLogic.getAllGauntlets()
        .then(gauntlets => {
            res.json(gauntlets);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}