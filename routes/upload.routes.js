const { Router } = require("express");
const { check } = require("express-validator");

// * middleware
const {
   ValidataInputs,
   validateFileUpload,
} = require("../middlewares");

// * controllers
const {
   loadFile,
   updateImage,
} = require("../controllers/upload.controller");

// * helpers
const { allowCollections } = require("../helpers");

// ! ----------------------------------------------------

const router = Router();

// ? GET load files
router.post("/", validateFileUpload, loadFile);

// ? GET load files
router.put(
   "/:collection/:id",
   [
      check("id", "id invalid").isMongoId(),
      check("collection").custom((c) =>
         allowCollections(c, ["users", "products"])
      ),
      validateFileUpload,
      ValidataInputs,
   ],
   updateImage
);

module.exports = router;
