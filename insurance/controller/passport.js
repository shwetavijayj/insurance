var mongo = require('../mongoConnection');
let userModel = mongo.mongoose.model("user", mongo.user, "user");

function test(username, password, done) {
    userModel.findOne({
        username: username
    }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false);
        }

        if (user.password != password) {
            return done(null, false);
        }
        return done(null, user);
    });
}
module.exports = {
    test
}