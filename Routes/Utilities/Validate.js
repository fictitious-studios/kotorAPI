var kotorAssert = require('../../BaseClasses/KotorAssert.js');

exports.armor = function(req, res, next) {
    try {
        
        kotorAssert.notNull(req.body.name);
        kotorAssert.notNull(req.body.defBonus);
        kotorAssert.notNull(req.body.maxDexBonus);
        kotorAssert.notNull(req.body.reqFeat);
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
        
        kotorAssert.notWhiteSpace(req.body.name);
        kotorAssert.notWhiteSpace(req.body.defBonus);
        kotorAssert.notWhiteSpace(req.body.maxDexBonus);
        kotorAssert.notWhiteSpace(req.body.reqFeat);
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
        
        next();
    }
    catch(error) {
        res.status(400);
        res.send(error.message);
    }
}