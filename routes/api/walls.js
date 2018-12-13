const router = require("express").Router();
const wallControllers = require("../../controllers/wallControllers");
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
app.use(bodyParser.json());

router.route("/createWall").post(wallControllers.createWall);
router.route("/searchGifts").get(wallControllers.findAllGifts);
router.route("/getAllGifts").get(wallControllers.findAllSearchedGifts);
router.route("/saveWallInfo").post(wallControllers.updateWall);

module.exports = router;