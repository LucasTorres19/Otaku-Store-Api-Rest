const mongoose = require('mongoose');

// Connection to DB
mongoose.connect(process.env.DB_URL
,{ useUnifiedTopology: true,useNewUrlParser: true },function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});
