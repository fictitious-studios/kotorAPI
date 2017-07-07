var businessLogic = require('../BusinessLogic/ArmorsBusinessLogic.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var validateArmor = require('./Utilities/Validate.js').armor;
var validateId = require('./Utilities/Validate.js').id;
var path = require('path');

module.exports = function(app, admin) {
    // =====================================
    //          USER ROUTES
    // =====================================
    app.get('/armors', function(req, res) {
        businessLogic.getAllArmors()
        .then(armors => {
            res.json(armors);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    app.get('/armors/:id', validateId, function(req, res) {
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
    app.get('/admin/armors', function(req, res) {
        businessLogic.getAllArmors()
        .then(armors => {
            res.json(armors);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    app.get('/admin/armors/new', function(req, res) {
        res.sendFile(path.join(__dirname + '/../Public/Views/NewArmor.html'));
    });
    
    app.get('/admin/armors/:id', validateId, function(req, res) {
        businessLogic.getArmorById(req.params.id)
        .then(armor => {
            res.json(armor);
        })
        .catch(error => {
            res.json(error.message);
        });
    });
    
    app.post('/admin/armors', urlencodedParser, validateArmor, function(req, res) {
        
        var immunity = [];

        if (req.body.immunity1) immunity.push(req.body.immunity1);
        if (req.body.immunity2) immunity.push(req.body.immunity2);
        if (req.body.immunity3) immunity.push(req.body.immunity3);
        
        var armor = {
            name: req.body.name,
            defBonus: req.body.defBonus,
            maxDexBonus: req.body.maxDexBonus,
            reqFeat: req.body.reqFeat,
            affinityRestriction: req.body.affinityRestriction,
            imageURL: req.body.imageURL,
            description: req.body.description,
            damageResistance: {
                cold: req.body.cold,
                fire: req.body.fire,
                sonic: req.body.sonic,
                electrical: req.body.electrical,
                bludgeoning: req.body.bludgeoning,
                slashing: req.body.slashing
            },
            attributes: {
                strength: req.body.strength,
                dexterity: req.body.dexterity,
                constitution: req.body.constitution,
                intelligence: req.body.intelligence,
                wisdom: req.body.wisdom,
                charisma: req.body.charisma
            },
            skills: {
                awareness: req.body.awareness,
                computerUse: req.body.computerUse,
                demolitions: req.body.demolitions,
                repair: req.body.repair,
                security: req.body.security,
                stealth: req.body.stealth,
                treatInjury: req.body.treatInjury
            },
            effects: {
                lifeRegeneration: req.body.lifeRegeneration,
                forceRegeneration: req.body.forceRegeneration
            },
            immunity: immunity
        };
        
        businessLogic.insertArmor(armor)
        .then(result => {
            res.redirect('/admin/armors/new');
        })
        .catch(error => {
            res.json(error.message);
        });
    });
}