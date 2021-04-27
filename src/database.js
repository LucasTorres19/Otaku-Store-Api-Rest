const mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://wachiraton11:soyhermosho11@cluster0-shard-00-00.skuwb.mongodb.net:27017,cluster0-shard-00-01.skuwb.mongodb.net:27017,cluster0-shard-00-02.skuwb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7twvaf-shard-0&authSource=admin&retryWrites=true&w=majority'
,{ useUnifiedTopology: true,useNewUrlParser: true },function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});
