var businessLogic = require("../BusinessLogic/ArmorsBusinessLogic.js");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var kotorAssertArmor = require("../BaseClasses/KotorAssert.js").armor;

module.exports = function(app, admin) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get("/armors", function(req, res) {
        businessLogic.getAllArmors()
        .then(armors => {
            res.json(armors);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    app.get("/armors/:id", function(req, res) {
        businessLogic.getArmorById(req.params.id)
        .then(armor => {
            res.json(armor);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    // =====================================
    //          ADMIN ROUTES
    // =====================================
    admin.get("/armors", function(req, res) {
        businessLogic.getAllArmors()
        .then(armors => {
            res.json(armors);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    admin.get("/armors/:id", function(req, res) {
        businessLogic.getArmorById(req.params.id)
        .then(armor => {
            res.json(armor);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    admin.post("/armors", urlencodedParser, kotorAssertArmor, function(req, res) {
                
        var immunity = [];

        if (req.body.immunity1) immunity.push(req.body.immunity1);
        if (req.body.immunity2) immunity.push(req.body.immunity2);
        if (req.body.immunity3) immunity.push(req.body.immunity3);
        
        var armor = {
            "name": req.body.name,
            "defBonus": req.body.defBonus,
            "maxDexBonus": req.body.maxDexBonus,
            "reqFeat": req.body.reqFeat,
            "imageURL": req.body.imageURL,
            "description": req.body.description,
            "damageResistance": {
                "cold": req.body.cold,
                "fire": req.body.fire,
                "sonic": req.body.sonic,
                "electrical": req.body.electrical,
                "bludgeoning": req.body.bludgeoning,
                "slashing": req.body.slashing
            },
            "attributes": {
                "strength": req.body.strength,
                "dexterity": req.body.dexterity,
                "constitution": req.body.constitution,
                "intelligence": req.body.intelligence,
                "wisdom": req.body.wisdom,
                "charisma": req.body.charisma
            },
            "immunity": immunity
        };
        
        businessLogic.insertArmor(armor)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}