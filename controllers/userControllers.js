const db = require('../models')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
	index: (req, res) => {
		db.User.find({}, (err, users) => {
			res.json(users)
		})
	},

	show: (req, res) => {
		db.User
			.findById({ _id: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	create: (req, res) => {
		db.User
			.findOne({ email: req.body.email })
			.then(dbUser => {
				if (dbUser == null) {
					bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
						req.body.password = hash;
						db.User.create(req.body)
							.then(dbModel => res.json(dbModel))
							.catch(err => res.status(422).json(err));
					});
				} else {
					res.json({
						validate: false
					});
				}
			})
			.catch(err => res.status(422).json(err))
	},

	update: (req, res) => {
		db.User
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	destroy: (req, res) => {
		db.User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({ success: true, message: "User deleted.", user })
		})
	},

	logIn: (req, res) => {
		db.User
			.findOne({ email: req.query.email })
			.then(dbUser => {
				if (dbUser === null) {
					res.json({
						validate: false
					})
				} else {
					bcrypt.compare(req.query.password, dbUser.password, function (err, response) {
						if (dbUser !== null && response == true) {
							let user = dbUser.username;
							jwt.sign({ user }, "secretkey", { expiresIn: "300s" },
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
						}
						else {
							res.json({
								validate: false
							});
						}
					})
				}
			})
			.catch(err => res.status(422).json(err))
	}
}
