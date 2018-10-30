const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').load();
const logger = require('morgan');
const bodyParser = require('body-parser');
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost/WallofKindness';
const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./routes");
const userRoutes = require('./routes/api/users.js');

//Database connection
mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
});


// Define middleware here
app.use(express.static(`${__dirname}/client/build`));
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);
app.use('/api/users', userRoutes)


app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
});


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WallofKindness");

// Send every request to the React app
// Define any API routes before this runs


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
