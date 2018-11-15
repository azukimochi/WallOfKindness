
router = require("express").Router();
express = require('express'),
usersRouter = new express.Router(),
usersCtrl = require('../../controllers/userControllers.js'),
verifyToken = require('../../serverAuth.js').verifyToken

usersRouter.route('/')
	.get(usersCtrl.index)

usersRouter.route('/create')
	.post(usersCtrl.create)

usersRouter.route('/logIn')
	.get(usersCtrl.logIn)
// usersRouter.post('/authenticate', usersCtrl.authenticate)


usersRouter.use(verifyToken)
usersRouter.route('/:id')
	.get(usersCtrl.show)
	.put(usersCtrl.update)
	.delete(usersCtrl.destroy)



module.exports = usersRouter
