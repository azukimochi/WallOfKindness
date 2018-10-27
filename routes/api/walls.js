const router = require("express").Router();
const wallControllers = require("../../controllers/wallControllers");


router.route("/searchGifts").get(wallControllers.findAllGifts);
// router.route("/getSavedArticles").get(articleController.getSavedArticles);
// router.route("/deleteSavedArticle").delete(articleController.deleteSavedArticle);

module.exports = router;