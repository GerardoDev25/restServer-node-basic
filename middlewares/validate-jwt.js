const jwt = require("jsonwebtoken");
const { response, request } = require("express");

const validateJWT = (req = request, res = response, next) => {
   const token = req.header("x-token");

   // * if there is no token
   if (!token)
      return res
         .status(401)
         .json({ msg: "there is no token in the request" });

   // * validate token
   try {
      const { uid } = jwt.verify(
         token,
         process.env.SECRETORPRIVATEKEY
      );

      req.uid = uid;

      next();
   } catch (error) {
      console.error(error);
      res.status(401).json({
         msg: "token isn't valid",
      });
   }
};

module.exports = { validateJWT };
