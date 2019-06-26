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
    required: true
  },
  age: Number
});

const Logins = mongoose.model('Logins', Schema);
//Veri seti hazırlama
const data = {
  id: 1,
  username: 'remzidalyan',
  name: 'Remzi DALYAN',
  password: 1234,
  age: 21
}
const user = new Logins(data) // Yeni bir kullanıcı satırı oluşturalım.

user.save((err, doc) => { // Yeni oluşturduğumuz satırı işleyelim.
  if (err) {
    console.error(err)
  } else {
    console.log(doc)
    console.log("Veri eklendi. Program kapatıldı.");
    process.exit(0);
  }
})
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log("Mongoose varsayılan bağlantısı, uygulama sonlandırmasıyla" +
      " bağlantısı kesildi ");
    process.exit(0);
  });
});