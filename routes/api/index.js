const router = require("express").Router();
const WallRoutes = require("./walls");
// const UserRoutes = require("./users");
const send = require("./send"); 
const AuthRoutes = require("./auth.js")

router.use("/walls", WallRoutes);
// router.use("/users", UserRoutes);
router.use("/send", send); 
router.use("/auth", AuthRoutes);

module.exports = router;
