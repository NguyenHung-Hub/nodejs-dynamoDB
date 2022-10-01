const { Router } = require("express");
const productController = require("../controllers/product.controller");

const router = Router();
// const productController = require("../controllers/product.controller");

router.get("/:id", productController.getItem);
router.get("/", productController.getAll);
router.post("/", productController.save);
router.delete("/:id", productController.remove);

module.exports = router;
