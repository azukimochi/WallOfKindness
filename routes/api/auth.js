const express = require('express');
const router = require("express").Router();

// this is for api/auth"

router.get('/', (req, res) => {
    res.json({
        status: "200"
    })
});

module.exports = router;