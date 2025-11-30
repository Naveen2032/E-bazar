const userSchema = require("../Models/user-schema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "product-crud";
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const checkEmail = await userSchema.findOne({ email: email });
    if (checkEmail) {
      res.json({ success: false, message: "Email already exists!" });
    } else {
      const hashedPassword = await bcryptjs.hash(password, 10);
      const newUser = await new userSchema({
        username,
        email,
        password: hashedPassword,
      }).save();
      res.json({ success: true, message: "Registration successful" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error!" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      res.json({ success: false, message: "Invalid credential" });
    } else {
      const checkPassword = await bcryptjs.compare(password, user.password);
      if (checkPassword) {
        const token = await jwt.sign(user.id, SECRET_KEY);
        res.json({ success: true, message: "Login successful", token });
      } else {
        res.json({ success: false, message: "Invalid credential" });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error!" });
  }
};
const getProfile = async (req, res) => {
  try {
    const userProfile = await userSchema.findById(req.userId);
    if (userProfile) {
      res.json({ success: true, userProfile });
    } else {
      res.json({ success: false, message: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error!" });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    var userProfile = await userSchema.findById(req.userId);
    if (userProfile) {
      const { username, email, phone, password } = req.body;
      const profile = req?.file?.filename;
      const newProfile = {};
      if (username) newProfile.username = username;
      if (phone) newProfile.phone = phone;
      if (email) newProfile.email = email;
      if (profile) newProfile.profile = profile;
      if (password) {
        const hashedPassword = await bcryptjs.hash(password, 10);
        newProfile.password = hashedPassword;
      }
      userProfile = await userSchema.findByIdAndUpdate(
        req.userId,
        {
          $set: newProfile,
        },
        { new: true }
      );
      res.json({
        success: true,
        profile: userProfile,
        message: "Profile updated successfully!",
      });
    } else {
      res.json({ success: false, message: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error!" });
  }
};
module.exports = { login, register, getProfile, updateUserProfile };
