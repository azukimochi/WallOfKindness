const express = require('express');
const router = require("express").Router();

// this is for api/auth"
router.get('/', (req, res) => {
    // No need for validation here because verifytoken already did that. 
    // Once it reaches to this function, we just need to send a json to tell user that their token is valid
    res.json({
        status: "200"
    })
});

module.exports = router;