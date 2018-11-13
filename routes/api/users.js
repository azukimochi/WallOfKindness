
router = require("express").Router();
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../../controllers/users.js'),
	verifyToken = require('../../serverAuth.js').verifyToken

usersRouter.route('/')
	.get(usersCtrl.index)

usersRouter.route('/create')
	.post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.route('/update/:id')
	.put(usersCtrl.update)
	
usersRouter.use(verifyToken)
usersRouter.route('/:id')
	.get(usersCtrl.show)
	.delete(usersCtrl.destroy)



module.exports = usersRouter
