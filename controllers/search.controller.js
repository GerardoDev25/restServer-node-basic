const { response, request } = require("express");
const { ObjectId } = require("mongoose").Types;

const {
   User: UserModel,
   Category: CategoryModel,
   Product: ProductModel,
} = require("../models");

// ! ----------------------------------------------------

const collections = ["users", "categories", "products", "roles"];

// ? search user by id
const searchUsers = async (term, res = response) => {
   const isMondoId = ObjectId.isValid(term);

   // * search by id
   if (isMondoId) {
      const user = await UserModel.findById(term);
      return res.json({ results: user ? [user] : [] });
   }

   // * serach by name or email
   const regex = new RegExp(term, "i");
   const users = await UserModel.find({
      $or: [{ name: regex }, { email: regex }],
      $and: [{ state: true }],
   });

   // * send result
   res.json({ results: users });
};

// ? Get serach products and categories
const search = (req = request, res = response) => {
   const { collection, term } = req.params;

   if (!collections.includes(collection))
      return res.status(400).json({
         msg: `the allowed collections are ${collections}`,
      });

   switch (collection) {
      case collections[0]:
         searchUsers(term, res);
         break;

      case collections[1]:
         break;

      case collections[2]:
         break;

      default:
         res.status(500).json({
            msg: "I forgot to do this search",
         });

         break;
   }
};

module.exports = { search };
