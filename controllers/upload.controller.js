const { request, response } = require("express");

const { uploadFile } = require("../helpers");

const {
   User: UserModel,
   Product: ProductModel,
} = require("../models");

// ? POST load file
const loadFile = async (req = request, res = response) => {
   //

   try {
      //   const name = await uploadFile(req.files, ["txt", "md"], 'texts');
      const name = await uploadFile(
         req.files,
         undefined,
         "imgs"
      );
      res.status(200).json({ name });

      //
   } catch (msg) {
      res.status(400).json({ msg });
   }
};

// ? PUt update image
const updateImage = async (req = request, res = response) => {
   //

   const { collection, id } = req.params;

   let model;

   switch (collection) {
      case "users":
         model = await UserModel.findById(id);
         if (!model)
            return res.status(400).json({
               msg: `the user with id: ${id} don't exist`,
            });

         break;
      case "products":
         model = await ProductModel.findById(id);
         if (!model)
            return res.status(400).json({
               msg: `the product with id: ${id} don't exist`,
            });

         break;

      default:
         return res.status(500).json({
            msg: "I forgot validate this",
         });
   }

   const name = await uploadFile(
      req.files,
      undefined,
      collection
   );

   model.image = name;
   await model.save();

   res.json({ collection, id, name });
};

module.exports = { loadFile, updateImage };
