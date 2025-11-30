const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getProfile,
  updateUserProfile,
} = require("../controllers/user");
const { authUserProfile } = require("../Middleware/auth-user");
const multer = require("multer");
const {
  InsertProduct,
  ViewProduct,
  deleteProduct,
  viewSingleProduct,
  updateProduct,
  ViewOthersProduct,
  ViewAllProducts,
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
router.post("/register", register);
router.post("/login", login);
router.get("/ViewAllProducts", ViewAllProducts);
router.get("/get-user-profile", authUserProfile, getProfile);
router.post(
  "/insert-product",
  authUserProfile,
  upload.single("picture"),
  InsertProduct
);
router.get("/view-others-product", authUserProfile, ViewOthersProduct);
router.get("/view-product", authUserProfile, ViewProduct);
router.delete("/delete-product/:id", authUserProfile, deleteProduct);
router.get("/view-single-product/:id", authUserProfile, viewSingleProduct);
router.put(
  "/update-product/:id",
  authUserProfile,
  upload.single("picture"),
  updateProduct
);
router.put(
  "/update-profile",
  authUserProfile,
  upload.single("profile"),
  updateUserProfile
);
module.exports = router;
