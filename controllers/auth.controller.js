const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const UserModel = require("../models/user");

const login = async (req = request, res = response) => {
   const { email, password } = req.body;

   try {
      // * veriry if the eamil exist
      const user = await UserModel.findOne({ email });
      if (!user) {
         return res
            .status(400)
            .json({
               msg: "user or password isn't correct ¿ email",
            });
      }

      // * veriry if the user is active
      if (!user.state) {
         return res.status(400).json({
            msg: "user or password isn't correct ¿ state",
         });
      }

      // * veriry the password
      const validPassword = bcryptjs.compareSync(
         password,
         user.password
      );
      if (!validPassword) {
         return res
            .status(400)
            .json({
               msg: "user or password isn't correct ¿ password",
            });
      }

      // * generate jwt

      res.json({
         mshg: "login ok",
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         msg: "something went wrong, please talk with the admin",
      });
   }
};

module.exports = { login };
