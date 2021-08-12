const { response, request } = require("express");
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
   const { body } = req;

   const user = new UserModel(body);

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
