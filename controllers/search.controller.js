const { response, request } = require("express");
const { ObjectId } = require("mongoose").Types;

const {
   User: UserModel,
   Category: CategoryModel,
   Product: ProductModel,
} = require("../models");

// ! ----------------------------------------------------

const collections = ["users", "categories", "products", "roles"];

const searchUsers = async (term, res = response) => {
   const isMondoId = ObjectId.isValid(term);

   if (isMondoId) {
      const user = await UserModel.findById(term);
      res.json({ results: user ? [user] : [] });
   }
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
