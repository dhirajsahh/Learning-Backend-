const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({
    id: "2323",
    title: "hello",
    imageUrl: "resate",
  });
});
module.exports = router;
