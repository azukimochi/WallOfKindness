express = require('express'),
usersRouter = require("express").Router();
usersCtrl = require('../controllers/userControllers.js')

usersRouter.route('/create')
	.post(usersCtrl.create)

usersRouter.route('/logIn')
	.get(usersCtrl.logIn)


module.exports = usersRouter
