const passport = require('passport-google');

passport.use(new GoogleStrategy({
  returnURL: 'http://localhost/auth/google/return',
  realm: 'http://localhost/'
}, function(identifier, done) {
  User.findByOpenID({
    openId: identifier
  }, function(err, user) {
    return done(err, user)
  });
}));