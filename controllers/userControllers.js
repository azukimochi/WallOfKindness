const db = require('../models')
// const Gift = require('../models/Gifts.js')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const signToken = require('../serverAuth.js').signToken

module.exports = {
	// list all users
	index: (req, res) => {
		db.User.find({}, (err, users) => {
			res.json(users)
		})
	},

	// find the logged in user for the dashboard
	show: (req, res) => {
		db.User
			.findById({ _id: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},


	// creates a new user
	create: (req, res) => {
		db.User
		.findOne({ email: req.body.email })
		  .then(dbUser => {
			console.log("email found");
			console.log(dbUser);
			if (dbUser == null) {
			  console.log("req.body", req.body);
			  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
				// Store hash in your password DB.
				console.log(hash);
				req.body.password = hash;
				db.User.create(req.body)
				  .then(dbModel => res.json(dbModel))
				  .catch(err => res.status(422).json(err));
			  });
			} else {
			  console.log("email already exists");
			  res.json({
				validate: false
			  });
			}
		  })
			.catch(err => res.status(422).json(err))
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
		db.Gift.create(req.body, (err) => {
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a token to "log in":
			// const token = signToken(user)
			res.json({success: true, message: "Gift added."})
		})

	},
	// update an existing user
	update: (req, res) => {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

	// update: (req, res) => {
	// 	db.User.findById(req.params.id, (err, user) => {
	// 		Object.assign(user, req.body)
	// 		user.save((err, updatedUser) => {
	// 			res.json({success: true, message: "User updated.", user})
	// 		})

	// 	})
	
	// },

	// delete an existing user
	destroy: (req, res) => {
		db. User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	},

	// the login route

	logIn: (req, res) => {
		console.log('req.query', req.query);
		db.User
		.findOne({email: req.query.email})
		.then(dbUser => {
			console.log('dbUser', dbUser)
			if (dbUser === null) {
				res.json({
					validate: false
				})
			} else {
				bcrypt.compare(req.query.password, dbUser.password, function(err, response) {
					if (dbUser !== null && response == true) {
						console.log("password is correct")
						let user = dbUser.username;
						jwt.sign({ user },"secretkey",{ expiresIn: "300s" },
							(err, token) => {
								res.json({
									validate: true,
									message: "Welcome " + dbUser.name,
									token: token,
									id: dbUser._id,
									name: dbUser.name
								});
							}
						);
						console.log("jwt sent");
					}
					else {
						console.log("password is not correct")
						res.json({
							validate: false
						});
					}
				})
			}
				})
				.catch(err => res.status(422).json(err))
	}
	// authenticate: (req, res) => {
		// check if the user exists
		// User.findOne({email: req.body.email}, (err, user) => {
			// if there's no user or the password is invalid
			// if(!user || !user.validPassword(req.body.password)) {
				// deny access
			// 	return res.json({success: false, message: "Invalid credentials."})
			// }

		// 	const token = signToken(user)
		// 	res.json({success: true, message: "Token attached.", token})
		// })
	// }
}
