
exports.Armor = function(req, res, next) {
    try {
        
        NotNull(req.body.name);
        NotNull(req.body.defBonus);
        NotNull(req.body.maxDexBonus);
        NotNull(req.body.reqFeat);
        NotNull(req.body.imageURL);
        NotNull(req.body.description);
        NotNull(req.body.cold);
        NotNull(req.body.fire);
        NotNull(req.body.sonic);
        NotNull(req.body.electrical);
        NotNull(req.body.bludgeoning);
        NotNull(req.body.slashing);
        NotNull(req.body.strength);
        NotNull(req.body.dexterity);
        NotNull(req.body.constitution);
        NotNull(req.body.intelligence);
        NotNull(req.body.wisdom);
        NotNull(req.body.charisma);
        
        NotWhiteSpace(req.body.name);
        NotWhiteSpace(req.body.defBonus);
        NotWhiteSpace(req.body.maxDexBonus);
        NotWhiteSpace(req.body.reqFeat);
        NotWhiteSpace(req.body.imageURL);
        NotWhiteSpace(req.body.description);
        NotWhiteSpace(req.body.cold);
        NotWhiteSpace(req.body.fire);
        NotWhiteSpace(req.body.sonic);
        NotWhiteSpace(req.body.electrical);
        NotWhiteSpace(req.body.bludgeoning);
        NotWhiteSpace(req.body.slashing);
        NotWhiteSpace(req.body.strength);
        NotWhiteSpace(req.body.dexterity);
        NotWhiteSpace(req.body.constitution);
        NotWhiteSpace(req.body.intelligence);
        NotWhiteSpace(req.body.wisdom);
        NotWhiteSpace(req.body.charisma);
        
        IsANumber(req.body.defBonus);
        IsANumber(req.body.maxDexBonus);
        IsANumber(req.body.cold);
        IsANumber(req.body.fire);
        IsANumber(req.body.sonic);
        IsANumber(req.body.electrical);
        IsANumber(req.body.bludgeoning);
        IsANumber(req.body.slashing);
        IsANumber(req.body.strength);
        IsANumber(req.body.dexterity);
        IsANumber(req.body.constitution);
        IsANumber(req.body.intelligence);
        IsANumber(req.body.wisdom);
        IsANumber(req.body.charisma);
        
        next();
    }
    catch(error) {
        res.status(400);
        res.send(error.message);
    }
}

function NotNull(value) {
    if(!value) {
        throw new Error("Missing value");
    }
}

function NotWhiteSpace(value) {
    var hasCharacters = /\S/.test(value);
    if(!hasCharacters) {
        throw new Error("Value is empty or contains only white-space");
    }
}

function IsANumber(value) {
    if(isNaN(value)) {
        throw new Error("Invalid number");
    }
}