const router = require("express").Router();
const WallRoutes = require("./walls");
const UserRoutes = require("./users");

router.use("/walls", WallRoutes);
router.use("/users", UserRoutes);


module.exports = router;
