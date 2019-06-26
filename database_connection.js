const mongoose = require('mongoose');

var mongoDB = "mongodb://127.0.0.1:27017/staj_db";

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
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log("Mongoose varsayılan bağlantısı, uygulama sonlandırmasıyla" +
      " bağlantısı kesildi ");
    process.exit(0);
  });
});