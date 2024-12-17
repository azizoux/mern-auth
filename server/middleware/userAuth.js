import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized. Login Again.",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id) {
      req.body.userId = decodedToken.id;
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again.",
      });
    }
    console.log("userId: ", decodedToken.id);

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
export default userAuth;