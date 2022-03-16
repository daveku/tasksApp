const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // obtenemos el token del header (Bearer Token)
      token = req.headers.authorization.split(" ")[1];

      // verificas la firma
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // obtenemos la información del usuario del token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Acceso No Autorizado.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Acceso No Autorizado. NECESITAS UN TOKEN");
  }
});

module.exports = {
  protect,
};
