const express = require('express');// express
const app = express();
const bodyParser = require('body-parser');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const path = require('path');
var PORT = process.env.PORT || 5000;
dotenv.config({ path: './config/config.env' });

// connect mongo
connectDB();

// dotenv
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  // load env vars. this goes before route files so api works
  dotenv.config({ path: './config/config.env' });
}

// bodyparser middleware, handles http requests
app.use(bodyParser.urlencoded({ extended: true }));

// init middleware
app.use(express.json({ extended: false }));

// cookie parser
app.use(cookieParser());

// access routes
app.use('/', require('./routes/landing'));

// heroku 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use(errorHandler);

app.get('/', (req, res) => res.send('norcal-hikes API Running'));

console.log('');
app.listen(
  PORT, 
  () => console.log(`>>> norcal-hikes Server started on port ${PORT}`.black.bold)
);