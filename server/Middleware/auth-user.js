const jwt = require("jsonwebtoken");
const SECRET_KEY = "product-crud";

const authUserProfile = async (req, res, next) => {
  try {
    const userToken = await req.header("auth-token");
    if (userToken) {
      const userInfo = await jwt.verify(userToken, SECRET_KEY);
      //   console.log(userInfo);
      req.userId = userInfo;
      next();
    } else {
      res.json({
        success: false,
        message: "Unauthorized! Token not provided!",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Some internal error!" });
  }
};

module.exports = { authUserProfile };
