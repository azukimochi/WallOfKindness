const router = require("express").Router();
const wallControllers = require("../../controllers/wallControllers");


const bodyParser = require("body-parser");
const express = require('express');
const app = express();
app.use(bodyParser.json());




router.route("/searchGifts").get(wallControllers.findAllGifts);
router.route("/saveWallInfo").post(wallControllers.updateWall);
// router.route("/loadWallInfo").post(wallControllers.loadWall);


module.exports = router;