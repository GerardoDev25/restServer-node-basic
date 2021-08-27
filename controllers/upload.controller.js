const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { request, response } = require("express");

// ? POST upload file
const loadFile = async (req = request, res = response) => {
   //

   // * if come a file property in the request
   if (!req.files || Object.keys(req.files).length === 0)
      return res
         .status(400)
         .json({ msg: "No files were uploaded." });

   if (!req.files.file)
      return res
         .status(400)
         .json({ msg: "No files were uploaded." });

   // * get file
   const { file } = req.files;

   // * get extencion
   const cutName = file.name.split(".");
   const extension = cutName[cutName.length - 1];

   // * velidate extension of file
   const extensionsValid = ["png", "jpg", "jpeg", "gif"];
   if (!extensionsValid.includes(extension))
      return res
         .status(400)
         .json({ msg: `extension ${extension} invalid` });

   // * create path of the file
   const nameTemp = uuidv4() + "." + extension;
   const uploadPath = path.join(
      __dirname,
      "../uploads/",
      nameTemp
   );

   // * uploading the file
   file.mv(uploadPath, (err) => {
      if (err) return res.status(500).json({ err });

      res.status(200).json({
         msg: "File uploaded to " + uploadPath,
      });
   });
};

module.exports = { loadFile };
