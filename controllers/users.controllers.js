const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const UserModel = require("../models/user");

// ? 0GET
const userGet = (req = request, res = response) => {
   const query = req.query;

   req.res.json({
      msg: "get API - contralador",
      query,
   });
};

// ? POST
const userPost = async (req = request, res = response) => {
   

   const { name, email, password, role } = req.body;

   const user = new UserModel({ name, email, password, role });

   // * check if exist the email
   const exitEmail = await UserModel.findOne({ email });
   if (exitEmail) {
      return res.status(400).json({
         msg: "that email exist in the data base",
      });
   }

   // * encode the password
   const salt = bcryptjs.genSaltSync();
   user.password = bcryptjs.hashSync(password, salt);
   await user.save();

   res.json({
      msg: "post API - contralador",
      user,
   });
};

// ? PUT
const userPut = (req = request, res = response) => {
   const { id } = req.params;

   res.status(400).json({
      msg: "put API - contralador",
      id,
   });
};

// ? DELETE
const userDelete = (req = request, res = response) => {
   res.json({
      msg: "delete API - contralador",
   });
};

// ? PATCH
const userPatch = (req = request, res = response) => {
   res.json({
      msg: "patch API - contralador",
   });
};

module.exports = {
   userGet,
   userPost,
   userPut,
   userDelete,
   userPatch,
};
