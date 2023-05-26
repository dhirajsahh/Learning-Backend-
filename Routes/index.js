const router = require("express").Router();
const authRouter = require("./auth");
const postRouter = require("./Post");
const Controller = require("../controllers/auth");

router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/signup", Controller.signupController);
router.use("/login", Controller.loginController);
router;
module.exports = router;
