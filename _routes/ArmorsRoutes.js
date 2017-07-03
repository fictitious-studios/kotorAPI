var businessLogic = require("../BusinessLogic/ArmorsBusinessLogic.js");

module.exports = function(app) {
    app.get("/armors", function(req, res) {
        var promise = businessLogic.GetAllArmors();
        
        promise.then((armors) => {
            res.json(armors);
        });
    });
    
    app.get("/armors/:id", function(req, res) {
        var armorId = req.params.id;
        var promise = businessLogic.GetArmorById(armorId);
        
        promise.then((armor) => {
            res.json(armor);
        });
    });    
}

