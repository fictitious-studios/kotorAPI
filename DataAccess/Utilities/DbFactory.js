var userURL = 'mongodb://user:kotor@ds043220.mlab.com:43220/kotor_development';
var adminURL = 'mongodb://admin:mandalore@ds043220.mlab.com:43220/kotor_development';

exports.getUserConnection = function(mongo) {
    return mongo.MongoClient.connect(userURL);
}

exports.getAdminConnection = function(mongo) {
    return mongo.MongoClient.connect(adminURL);
}