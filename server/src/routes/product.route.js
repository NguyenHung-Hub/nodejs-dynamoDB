const { Router } = require("express");
const productController = require("../controllers/product.controller");

const router = Router();
// const productController = require("../controllers/product.controller");

router.get("/", productController.getAll);
router.post("/", productController.save);

module.exports = router;