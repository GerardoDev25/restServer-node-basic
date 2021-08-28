const { request, response } = require("express");
const { uploadFile } = require("../helpers");

// ? POST load file
const loadFile = async (req = request, res = response) => {
   //

   // * if come a file property in the request
   if (
      !req.files ||
      Object.keys(req.files).length === 0 ||
      !req.files.file
   )
      return res
         .status(400)
         .json({ msg: "No files were uploaded." });

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
   const { collection, id } = req.params;

   res.json({ collection, id });
};

module.exports = { loadFile, updateImage };
