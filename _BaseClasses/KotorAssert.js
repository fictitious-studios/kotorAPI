
exports.notNull = function(value) {
    if(!value) {
        throw new Error('Missing value');
    }
}

exports.notWhiteSpace = function(value) {
    var hasCharacters = /\S/.test(value);
    if(!hasCharacters) {
        throw new Error('Value is empty or contains only white-space');
    }
}

exports.isANumber = function(value) {
    if(isNaN(value)) {
        throw new Error('Invalid number');
    }
}

exports.isValidId = function(value) {
    var type = typeof value;
    if(value.length !== 24 || type !== 'string') {
        throw new Error('Invalid id');
    }
}