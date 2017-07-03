var businessLogic = require("../BusinessLogic/ArmorsBusinessLogic.js");

module.exports = function(app) {
    app.get("/armors", function(req, res) {
        businessLogic.GetAllArmors()
        .then(armors => {
            res.json(armors);
        })
        .catch((error) => {
            res.json(error.message);
        });
    });
    
    app.get("/armors/:id", function(req, res) {
        businessLogic.GetArmorById(req.params.id)
        .then(armor => {
            res.json(armor);
        })
        .catch(error => {
            res.json(error.message);
        });
    });    
}