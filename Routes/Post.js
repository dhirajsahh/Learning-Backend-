const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({
    name: "dhiraj",
    roll: 5,
    adress: "siraha",
  });
});
module.exports = router;
