const mongoose = require('mongoose');
var mongoDB = "mongodb://127.0.0.1:27017/staj_db";

//Database bağlanma
mongoose.connect(mongoDB);

mongoose.connection.on('connected', function() {
  console.log("Mongoose bağlantısı adresinde açık: " + mongoDB);
});
mongoose.connection.on('error', function(err) {
  console.log("Mongoose bağlantı hatası:" + err);
});
mongoose.connection.on('disconnected', function() {
  console.log("Mongoose bağlantısı kesildi.");
});

//Schema tanımlama
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
//Veri seti hazırlama
const handleError = err => console.log(err);
const id = '5d07543dc660994fc020fd73'

Logins.findById(id, (err, user) => {
  if (err) return handleError(err)
  user.age = 22;
  user.save((err, updatedUser) => {
    if (err) return handleError(err)
    console.log(updatedUser);
    console.log('Kayıt Güncellendi');
    process.exit(0);
  })
})



process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log("Mongoose varsayılan bağlantısı, uygulama sonlandırmasıyla" +
      " bağlantısı kesildi ");
    process.exit(0);
  });
});