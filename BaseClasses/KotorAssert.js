
exports.armor = function(req, res, next) {
    try {
        
        notNull(req.body.name);
        notNull(req.body.defBonus);
        notNull(req.body.maxDexBonus);
        notNull(req.body.reqFeat);
        notNull(req.body.imageURL);
        notNull(req.body.description);
        notNull(req.body.cold);
        notNull(req.body.fire);
        notNull(req.body.sonic);
        notNull(req.body.electrical);
        notNull(req.body.bludgeoning);
        notNull(req.body.slashing);
        notNull(req.body.strength);
        notNull(req.body.dexterity);
        notNull(req.body.constitution);
        notNull(req.body.intelligence);
        notNull(req.body.wisdom);
        notNull(req.body.charisma);
        
        notWhiteSpace(req.body.name);
        notWhiteSpace(req.body.defBonus);
        notWhiteSpace(req.body.maxDexBonus);
        notWhiteSpace(req.body.reqFeat);
        notWhiteSpace(req.body.imageURL);
        notWhiteSpace(req.body.description);
        notWhiteSpace(req.body.cold);
        notWhiteSpace(req.body.fire);
        notWhiteSpace(req.body.sonic);
        notWhiteSpace(req.body.electrical);
        notWhiteSpace(req.body.bludgeoning);
        notWhiteSpace(req.body.slashing);
        notWhiteSpace(req.body.strength);
        notWhiteSpace(req.body.dexterity);
        notWhiteSpace(req.body.constitution);
        notWhiteSpace(req.body.intelligence);
        notWhiteSpace(req.body.wisdom);
        notWhiteSpace(req.body.charisma);
        
        isANumber(req.body.defBonus);
        isANumber(req.body.maxDexBonus);
        isANumber(req.body.cold);
        isANumber(req.body.fire);
        isANumber(req.body.sonic);
        isANumber(req.body.electrical);
        isANumber(req.body.bludgeoning);
        isANumber(req.body.slashing);
        isANumber(req.body.strength);
        isANumber(req.body.dexterity);
        isANumber(req.body.constitution);
        isANumber(req.body.intelligence);
        isANumber(req.body.wisdom);
        isANumber(req.body.charisma);
        
        next();
    }
    catch(error) {
        res.status(400);
        res.send(error.message);
    }
}

function notNull(value) {
    if(!value) {
        throw new Error("Missing value");
    }
}

function notWhiteSpace(value) {
    var hasCharacters = /\S/.test(value);
    if(!hasCharacters) {
        throw new Error("Value is empty or contains only white-space");
    }
}

function isANumber(value) {
    if(isNaN(value)) {
        throw new Error("Invalid number");
    }
}