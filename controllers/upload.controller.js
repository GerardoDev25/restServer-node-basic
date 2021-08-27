const path = require("path");
const { request, response } = require("express");

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

   // * create path of the file
   const uploadPath = path.join(
      __dirname,
      "../uploads/",
      file.name
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
