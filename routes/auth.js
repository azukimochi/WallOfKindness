const express = require('express');
const router = require("express").Router();
usersCtrl = require('../controllers/userControllers.js')

// this is for /auth"
router.get('/', (req, res) => {
    // No need for validation here because verifytoken already did that. 
    // Once it reaches to this function, we just need to send a json to tell user that their token is valid
    res.json({
        status: "200"
    })
});

// this is for auth/findUser/id
router.route('/findUser/:id')
.get(usersCtrl.show)

// this is for auth/update/id
router.route('/update/:id')
.put(usersCtrl.update)


module.exports = router;