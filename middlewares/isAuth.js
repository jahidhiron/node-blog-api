const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/kyes");

const isAuth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
      ? req.headers.authorization.split(" ")
      : [];
    const token = authorization.length > 1 ? authorization[1] : null;

    if (token) {
      const payload = jwt.verify(token, jwtSecret);

      if (payload) {
        req.user = {
          _id: payload._id,
          name: payload.name,
          email: payload.email,
          role: payload.role,
        };
        next();
      } else {
        res.code = 401;
        throw new Error("Unauthorized");
      }
    } else {
      res.code = 400;
      throw new Error("Token is required");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = isAuth;
