var mongoose = require("../mongoConnection");
let userModel = mongoose.mongoose.model("user", mongoose.user, "user");
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

function authenticate(username, password, done) {
    passport.use(new LocalStrategy(
        function (username, password, done) {
            userModel.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));
}


module.exports = {
    authenticate
}