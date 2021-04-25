const mongoose = require('mongoose');

module.exports = async () => {
  
  const url = "mongodb://wachiraton11:soyhermosho11@cluster0-shard-00-00.skuwb.mongodb.net:27017,cluster0-shard-00-01.skuwb.mongodb.net:27017,cluster0-shard-00-02.skuwb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7twvaf-shard-0&authSource=admin&retryWrites=true&w=majority";

  mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true})
  .then(() =>{

    console.log("conexion establecida.")
    mongoose.Promise = global.Promise;

    return db = mongoose.connection

  })
  .catch(err => console.log(err));

};