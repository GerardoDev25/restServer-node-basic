const { response, request } = require("express");

// ? 0GET
const userGet = (req = request, res = response) => {
   const query = req.query;

   req.res.json({
      msg: "get API - contralador",
      query
   });
};

// ? POST
const userPost = (req = request, res = response) => {
   const { name, age } = req.body;

   res.json({
      msg: "post API - contralador",
      name,
      age,
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
