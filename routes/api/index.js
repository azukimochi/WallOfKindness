const router = require("express").Router();
const WallRoutes = require("./walls");

router.use("/walls", WallRoutes);


module.exports = router;
