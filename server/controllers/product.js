const productSchema = require("../Models/product-schema");

const InsertProduct = async (req, res) => {
  try {
    const { title, category, price, description } = req.body;
    // console.log(req.file);
    const picture = req?.file?.filename;
    const newProduct = await new productSchema({
      sellerId: req.userId,
      title: title,
      category: category,
      price: price,
      picture: picture,
      description: description,
    });
    const savedProduct = await newProduct.save();
    res.json({
      success: true,
      message: "Product information inserted successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};
const ViewProduct = async (req, res) => {
  try {
    const products = await productSchema.find({ sellerId: req.userId });
    res.json({ success: true, products: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};
const ViewAllProducts = async (req, res) => {
  try {
    const products = await productSchema.find();
    res.json({ success: true, products: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};
const ViewOthersProduct = async (req, res) => {
  try {
    const products = await productSchema.find().populate("sellerId");
    const othersProduct = products.filter(
      (product) => product.sellerId._id != req.userId
    );
    res.json({ success: true, products: othersProduct });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    if (!product) {
      res.json({ success: false, message: "Product not found!" });
    } else {
      await productSchema.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Product Deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};

const viewSingleProduct = async (req, res) => {
  try {
    const product = await productSchema
      .findById(req.params.id)
      .populate("sellerId");
    if (!product) {
      res.json({ success: false, message: "Product not found!" });
    } else {
      const products = await productSchema.find().populate("sellerId");
      const otherProducts = products.filter(
        (product) =>
          product.sellerId._id != req.userId && product._id != req.params.id
      );
      res.json({ success: true, product, otherProducts });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    if (!product) {
      res.json({ success: false, message: "Product not found!" });
    } else {
      const { title, category, price, description } = req.body;
      const picture = req?.file?.filename;
      const updatedProductInfo = {};
      if (title) {
        updatedProductInfo.title = title;
      }
      if (picture) {
        updatedProductInfo.picture = picture;
      }
      if (category) {
        updatedProductInfo.category = category;
      }
      if (price) {
        updatedProductInfo.price = price;
      }
      if (description) {
        updatedProductInfo.description = description;
      }
      await productSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: updatedProductInfo,
        },
        { new: true }
      );
      res.json({ success: true, message: "Product updated successfully" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some Internal Server Error!" });
  }
};

module.exports = {
  InsertProduct,
  ViewProduct,
  deleteProduct,
  viewSingleProduct,
  updateProduct,
  ViewOthersProduct,
  ViewAllProducts,
};
