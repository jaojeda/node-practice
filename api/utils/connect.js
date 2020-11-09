const mongoose = require('mongoose');

module.exports = (url = process.env.MONGODB_URI) => {

  //Set up default mongoose connection
  mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

  //Get the default connection
  const db = mongoose.connection;
  
  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

