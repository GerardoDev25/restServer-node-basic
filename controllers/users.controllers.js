const { response } = require("express");

// ? 0GET
const userGet = (req, res = response) => {
   res.json({
      msg: "get API - contralador",
   });
};

// ? POST
const userPost = (req, res = response) => {
   const { name, age } = req.body;

   res.json({
      msg: "post API - contralador",
      name,
      age,
   });
};

// ? PUT
const userPut = (req, res = response) => {
   res.status(400).json({
      msg: "put API - contralador",
   });
};

// ? DELETE
const userDelete = (req, res = response) => {
   res.json({
      msg: "delete API - contralador",
   });
};

// ? PATCH
const userPatch = (req, res = response) => {
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
