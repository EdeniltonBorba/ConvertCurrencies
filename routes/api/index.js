const router = require("express").Router();
const conversionRoutes = require("./conversion");

router.use("/conversion", conversionRoutes);

module.exports = router;