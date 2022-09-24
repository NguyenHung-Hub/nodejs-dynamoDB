const { Router } = require("express");
const productController = require("../controllers/product.controller");

const router = Router();
// const productController = require("../controllers/product.controller");

router.get("/", productController.getAll);
router.get("/:id", productController.getItem);
router.post("/", productController.save);
router.delete("/", productController.remove);

module.exports = router;
