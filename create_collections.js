const mongoose = require('mongoose');
var mongoDB = "mongodb://127.0.0.1:27017/staj_db";

const Schema = new mongoose.Schema({
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
    required: true
  },
  age: Number
});

const Logins = mongoose.model('Logins', Schema);

mongoose.connect(mongoDB, err => console.log(err ? err : 'mongo connected.'));