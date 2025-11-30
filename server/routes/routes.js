const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  InsertProduct,
  ViewProduct,
  deleteProduct,
  viewSingleProduct,
  updateProduct,
} = require("../controllers/product");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/insert-product", upload.single("picture"), InsertProduct);
router.get("/view-product", ViewProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/view-single-product/:id", viewSingleProduct);
router.put("/update-product/:id", upload.single("picture"), updateProduct);
module.exports = router;
