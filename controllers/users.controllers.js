const { response } = require("express");

// ? 0GET
const userGet = (req, res = response) => {
   res.json({
      msg: "get API - contralador",
   });
};

// ? POST
const userPost = (req, res = response) => {
   res.status(201).json({
      msg: "post API - contralador",
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
