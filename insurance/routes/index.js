var express = require('express');
var router = express.Router();
const passport = require('passport');
const myPassport = require('../controller/passport')
router.use(passport.initialize());
router.use(passport.session());

var GitHubStrategy = require('passport-github2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(
//   myPassport.test
// ));
/* GET home page. */



passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: 'd9f5f8c83b49b02de89b',
  clientSecret: 'cdf343e52c29b304872802c7a6a075d351efdc5e',
  callbackURL: "/"
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

//login using passport-custom authentication
// router.post('/',
//   passport.authenticate('local', { failureRedirect: '/error' }),
//   function (req, res) {
//     // res.redirect('/' + req.user.username);
//     console.log("Success");
//   });

router.get('/', (req, res) => {
  res.render('page1');
})

//login using passport-github authentication
router.post('/login',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    console.log("Success for github login");
  }
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  });

router.get('/',
  passport.authenticate('github', { failureRedirect: '/error' }),
  function (req, res) {
    res.redirect('/');
  });

router.get('/login', (req, res) => {
  res.render('index')
});

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn('/'),
  function (req, res) {
    res.render('profile', { user: req.user });
  });
module.exports = router;
