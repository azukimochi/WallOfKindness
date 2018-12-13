const router = require("express").Router();
const WallRoutes = require("./walls");
const send = require("./send"); 

router.use("/walls", WallRoutes);
router.use("/send", send); 

module.exports = router;
