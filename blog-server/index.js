const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index');
const config = require('./config');

app = express();

app.use(morgan('combined'));

app.use(bodyParser.json({ type: '*/*' }));

mongoose.connect(config.mongoDB, () => {
  console.log('SUCCESSFULLY CONNECTED TO MONGODB!');
});
mongoose.connection.on('error', err => {
  console.error(`ERROR: ${err.message}`);
});

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('HEY THERE!');
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log('Listening on Port ' + PORT));
