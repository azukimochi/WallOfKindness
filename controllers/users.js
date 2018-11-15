const User = require('../models/User.js')
const Gift = require('../models/Gifts.js')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const signToken = require('../serverAuth.js').signToken

module.exports = {
	// list all users
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	// get one user
	show: (req, res) => {
		console.log("Current User:")
		console.log(req.user)
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	},

	// create a new user
	create: (req, res) => {
		User.findOne({ email: req.body.email })
		  .then(dbUser => {
			console.log("email found");
			console.log(dbUser);
			if (dbUser == null) {
			  console.log("req.body", req.body);
			  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
				// Store hash in your password DB.
				console.log(hash);
				req.body.password = hash;
				User.create(req.body)
				  .then(dbModel => res.json(dbModel))
				  .catch(err => res.status(422).json(err));
			  });
			} else {
			  console.log("email already exists");
			  res.json({
				validate: false,
				status: "422"
			  });
			}
		  })
		  .catch(err => {
			res.json({
			  validate: false,
			  status: "422"
			});
		  });
	  },

	// create: (req, res) => {
	// 	User.create(req.body, (err, user) => {
	// 		if(err) return res.json({success: false, code: err.code})
	// 		// once user is created, generate a token to "log in":
	// 		const token = signToken(user)
	// 		res.json({success: true, message: "User created. Token attached.", token})
	// 	})

	// },

	

	// create a gifts collection
	createGifts: (req, res) => {
		Gift.create(req.body, (err) => {
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a token to "log in":
			// const token = signToken(user)
			res.json({success: true, message: "Gift added."})
		})

	},
	// update an existing user
	update: (req, res) => {

		User.findById(req.params.id, (err, user) => {
			
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "User updated.", user})
			})

		})
	
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	},

	// the login route
	authenticate: (req, res) => {
		// check if the user exists
		User.findOne({email: req.body.email}, (err, user) => {
			// if there's no user or the password is invalid
			if(!user || !user.validPassword(req.body.password)) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}

			const token = signToken(user)
			res.json({success: true, message: "Token attached.", token})
		})
	}
}
