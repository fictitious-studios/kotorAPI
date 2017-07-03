var businessLogic = require("../BusinessLogic/FeatsBusinessLogic.js");

module.exports = function(app) {
    app.get("/feats", function(req, res) {
        var promise = businessLogic.GetAllFeats();
        
        promise.then((feats) => {
            res.json(feats);
        });
    });
}