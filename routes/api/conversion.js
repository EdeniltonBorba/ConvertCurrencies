const router = require("express").Router();
const conversionController = require("../../controllers/conversionController.js");


router.route("/")
    .get(function () { conversionController.findAll })
    .post(function () { conversionController.create });

router
    .route("/:id")
    .get(function () { conversionController.findById })
    .put(function () { conversionController.update })
    .delete(function () { booksController.remove });

module.exports = router;