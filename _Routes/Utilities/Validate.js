var kotorAssert = require('../../_BaseClasses/KotorAssert.js');

exports.id = function(req, res, next) {
    try {
        kotorAssert.isValidId(req.params.id);
        next();
    }
    catch(error) {
        res.status(400);
        res.send(error.message);
    }
}

exports.armor = function(req, res, next) {
    try {
        
        kotorAssert.notNull(req.body.name);
        kotorAssert.notNull(req.body.defBonus);
        kotorAssert.notNull(req.body.maxDexBonus);
        kotorAssert.notNull(req.body.reqFeat);
        kotorAssert.notNull(req.body.affinityRestriction);
        kotorAssert.notNull(req.body.imageURL);
        kotorAssert.notNull(req.body.description);
        kotorAssert.notNull(req.body.cold);
        kotorAssert.notNull(req.body.fire);
        kotorAssert.notNull(req.body.sonic);
        kotorAssert.notNull(req.body.electrical);
        kotorAssert.notNull(req.body.bludgeoning);
        kotorAssert.notNull(req.body.slashing);
        kotorAssert.notNull(req.body.strength);
        kotorAssert.notNull(req.body.dexterity);
        kotorAssert.notNull(req.body.constitution);
        kotorAssert.notNull(req.body.intelligence);
        kotorAssert.notNull(req.body.wisdom);
        kotorAssert.notNull(req.body.charisma);
        kotorAssert.notNull(req.body.awareness);
        kotorAssert.notNull(req.body.computerUse);
        kotorAssert.notNull(req.body.demolitions);
        kotorAssert.notNull(req.body.repair);
        kotorAssert.notNull(req.body.security);
        kotorAssert.notNull(req.body.stealth);
        kotorAssert.notNull(req.body.treatInjury);
        kotorAssert.notNull(req.body.fortitude);
        kotorAssert.notNull(req.body.reflex);
        kotorAssert.notNull(req.body.will);
        kotorAssert.notNull(req.body.lifeRegeneration);
        kotorAssert.notNull(req.body.forceRegeneration);
        
        kotorAssert.notWhiteSpace(req.body.name);
        kotorAssert.notWhiteSpace(req.body.defBonus);
        kotorAssert.notWhiteSpace(req.body.maxDexBonus);
        kotorAssert.notWhiteSpace(req.body.reqFeat);
        kotorAssert.notWhiteSpace(req.body.affinityRestriction);
        kotorAssert.notWhiteSpace(req.body.imageURL);
        kotorAssert.notWhiteSpace(req.body.description);
        kotorAssert.notWhiteSpace(req.body.cold);
        kotorAssert.notWhiteSpace(req.body.fire);
        kotorAssert.notWhiteSpace(req.body.sonic);
        kotorAssert.notWhiteSpace(req.body.electrical);
        kotorAssert.notWhiteSpace(req.body.bludgeoning);
        kotorAssert.notWhiteSpace(req.body.slashing);
        kotorAssert.notWhiteSpace(req.body.strength);
        kotorAssert.notWhiteSpace(req.body.dexterity);
        kotorAssert.notWhiteSpace(req.body.constitution);
        kotorAssert.notWhiteSpace(req.body.intelligence);
        kotorAssert.notWhiteSpace(req.body.wisdom);
        kotorAssert.notWhiteSpace(req.body.charisma);
        kotorAssert.notWhiteSpace(req.body.awareness);
        kotorAssert.notWhiteSpace(req.body.computerUse);
        kotorAssert.notWhiteSpace(req.body.demolitions);
        kotorAssert.notWhiteSpace(req.body.repair);
        kotorAssert.notWhiteSpace(req.body.security);
        kotorAssert.notWhiteSpace(req.body.stealth);
        kotorAssert.notWhiteSpace(req.body.treatInjury);
        kotorAssert.notWhiteSpace(req.body.fortitude);
        kotorAssert.notWhiteSpace(req.body.reflex);
        kotorAssert.notWhiteSpace(req.body.will);
        kotorAssert.notWhiteSpace(req.body.lifeRegeneration);
        kotorAssert.notWhiteSpace(req.body.forceRegeneration);
        
        kotorAssert.isANumber(req.body.defBonus);
        kotorAssert.isANumber(req.body.maxDexBonus);
        kotorAssert.isANumber(req.body.cold);
        kotorAssert.isANumber(req.body.fire);
        kotorAssert.isANumber(req.body.sonic);
        kotorAssert.isANumber(req.body.electrical);
        kotorAssert.isANumber(req.body.bludgeoning);
        kotorAssert.isANumber(req.body.slashing);
        kotorAssert.isANumber(req.body.strength);
        kotorAssert.isANumber(req.body.dexterity);
        kotorAssert.isANumber(req.body.constitution);
        kotorAssert.isANumber(req.body.intelligence);
        kotorAssert.isANumber(req.body.wisdom);
        kotorAssert.isANumber(req.body.charisma);
        kotorAssert.isANumber(req.body.awareness);
        kotorAssert.isANumber(req.body.computerUse);
        kotorAssert.isANumber(req.body.demolitions);
        kotorAssert.isANumber(req.body.repair);
        kotorAssert.isANumber(req.body.security);
        kotorAssert.isANumber(req.body.stealth);
        kotorAssert.isANumber(req.body.treatInjury);
        kotorAssert.isANumber(req.body.fortitude);
        kotorAssert.isANumber(req.body.reflex);
        kotorAssert.isANumber(req.body.will);
        kotorAssert.isANumber(req.body.lifeRegeneration);
        kotorAssert.isANumber(req.body.forceRegeneration);
        
        next();
    }
    catch(error) {
        res.status(400);
        res.send(error.message);
    }
}