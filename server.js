const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	PORT = process.env.PORT || 3001,
	routes = require("./routes");
	
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WallOfKindness");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

app.use(routes);
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})