const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const item = require('./routes/api/items');

// bodyparser middleware
app.use(bodyParser.json());

//Db config
const db = require('./config/Keys').mongoURI;

//connect to mongo

mongoose.connect(db)
  .then(() => console.log('Mongoose connected ....'))
  .catch(err => console.log('error in Db connected ....',err))

  //Use routes

  app.use('/api/items', item);

  const port = process.env.PORT || 5000;
  
  app.listen(port, () => {
    console.log(`server started on port ${port}`);  
  })