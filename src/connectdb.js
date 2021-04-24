const { MongoClient } = require('mongodb');

module.exports = async () => {
  
  const dbName = 'mqmStore';

  const url = "mongodb://wachiraton11:soyhermosho11@cluster0-shard-00-00.skuwb.mongodb.net:27017,cluster0-shard-00-01.skuwb.mongodb.net:27017,cluster0-shard-00-02.skuwb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7twvaf-shard-0&authSource=admin&retryWrites=true&w=majority";

  try{
    const client = new MongoClient(url, {
      useUnifiedTopology: true, useNewUrlParser:true
    });

    await client.connect();

    const db = client.db(dbName)
    
    return db; 
  }catch(e){  console.log(e) }
};