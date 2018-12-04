const router = require("express").Router();
const WallRoutes = require("./walls");
// const UserRoutes = require("./users");
const send = require("./send"); 

router.use("/walls", WallRoutes);
// router.use("/users", UserRoutes);
router.use("/send", send); 

module.exports = router;
