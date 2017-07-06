var businessLogic = require("../BusinessLogic/FeatsBusinessLogic.js");

module.exports = function(app) {
    app.get("/feats", function(req, res) {
        businessLogic.getAllFeats()
        .then(feats => {
            res.json(feats);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}