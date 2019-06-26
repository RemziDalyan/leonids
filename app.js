//Sistemin kuallanacağı kütüphaneler
const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config/config.js');
const mysql = require('mysql');
const mongoose = require('mongoose');
const app = express();

//Config.js dosyasından MySQL parametreleri tanımlama
const db = mysql.createPool({
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database
});
mongoose.connect(config.db);

const Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
  },
  age: Number
});

const User = mongoose.model('User', Schema);
// Passport session ayarları
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

//Passport'ta FacebookStrategy kullanımı

passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret: config.facebook_api_secret,
    callbackURL: config.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
      //Kullanıcının mevcut olup olmadığını kontrol etme
      if (config.use_database) {
        // İf doğru olarak ayarlanırsa
        User.find({
          id: profile.id
        }, (err, rows) => {
          if (err) {
            console.log(err);
          }
          if (rows && rows.length === 0) {
            console.log("Kullanıcı bulunamadı. Yeni kullanıcı ekleniyor.");
            const data = {
              id: profile.id,
              username: profile.displayName.split(" ").join(""),
              name: profile.displayName
            }
            const user = new User(data)

            user.save((err, doc) => {
              if (err) {
                console.error(err)
              } else {
                console.log(doc)
                console.log("Veri eklendi.");
              }
            })
          } else {
            console.log("Kullanıcı veritabanında bulundu.");
          }
        });
      }
      return done(null, profile);
    });
  }
));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: 'keyboard cat',
  key: 'sid'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {
    user: req.user
  });
});

app.get('/account', ensureAuthenticated, function(req, res) {
  res.render('account', {
    user: req.user
  });
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: 'email'
}));


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login')
}


console.log("3000 portunda çalışıyor.");
app.listen(3000);