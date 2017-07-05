
exports.armor = function(req, res, next) {
    try {
        
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