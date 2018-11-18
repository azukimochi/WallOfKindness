express = require('express'),
// usersRouter = new express.Router(),
usersRouter = require("express").Router();
usersCtrl = require('../controllers/userControllers.js')
// verifyToken = require('../../serverAuth.js').verifyToken

// usersRouter.route('/')
// 	.get(usersCtrl.index)

usersRouter.route('/create')
	.post(usersCtrl.create)

usersRouter.route('/logIn')
	.get(usersCtrl.logIn)
// usersRouter.post('/authenticate', usersCtrl.authenticate)

// usersRouter.route('/:id')
// .put(usersCtrl.update)
// .delete(usersCtrl.destroy)


// usersRouter.use(verifyToken)

module.exports = usersRouter
