var devURL = "mongodb://user:kotor@ds043220.mlab.com:43220/kotor_development";

exports.GetMongoDevConnection = function(mongo) {
    return mongo.MongoClient.connect(devURL);
}