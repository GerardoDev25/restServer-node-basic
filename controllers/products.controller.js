const { response, request } = require("express");

const { Product: ProductsModel } = require("../models");

// ? GET all productos - public
const getProducts = (req = request, res = response) => {
   res.json("productos get all");
};

// ? GET  productos by id - public
const getProduct = (req = request, res = response) => {
   res.json("productos by id");
};

// ? POST create product - private with token
const createProduct = (req = request, res = response) => {
   res.json("productos create");
};

// ? PUT update a product - private with token
const updateProduct = (req = request, res = response) => {
   res.json("productos update");
};

// ? DELETE a product - private only admin
const dateteProduct = (req = request, res = response) => {
   res.json("productos dalete");
};

module.exports = {
   getProducts,
   getProduct,
   createProduct,
   updateProduct,
   dateteProduct,
};
