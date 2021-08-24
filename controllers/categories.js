const { request, response } = require("express");

const { Category } = require("../models");

// ? POST
const createCategory = async (req = request, res = response) => {
   const name = req.body.name.toUpperCase();

   const categoryDB = await Category.findOne({ name });

   if (categoryDB) {
      return res.status(400).json({
         msg: `the category ${categoryDB.name} exist!!`,
      });
   }

   // * generate data
   const data = { name, user: req.userAuth._id };

   // * save category
   const category = new Category(data);
   await category.save();
   res.status(201).json(category);
};

module.exports = {
   createCategory,
};
