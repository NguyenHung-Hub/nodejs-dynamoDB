const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const productController = require("../controllers/product.controller");

const router = Router();

const storage = multer.memoryStorage({
    destination(req, file, callback) {
        callback(null, "");
    },
});

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extname = fileTypes.test(path.extname(file.originalName.toLowerCase()));
    const minetype = fileTypes.test(file.minetype);

    if (extname && minetype) {
        return cb(null, true);
    }

    return cb("Error: Image only");
}
const upload = multer({
    storage,
    limits: { fileSize: 2000000 }, //2MB
    fileFilter(req, file, cb) {
        checkFileType(file, cb);
    },
});

router.get("/:id", productController.getItem);
router.get("/", productController.getAll);
router.post("/", upload.single("image"), productController.save);
router.delete("/:id", productController.remove);

module.exports = router;