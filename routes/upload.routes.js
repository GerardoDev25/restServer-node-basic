const { Router } = require("express");
const { check } = require("express-validator");

// * middleware
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs");

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
router.post("/", loadFile);

// ? GET load files
router.put(
   "/:collection/:id",
   [
      check("id", "id invalid").isMongoId(),
      check("collection").custom((c) =>
         allowCollections(c, ["users", "products"])
      ),
      ValidataInputs,
   ],
   updateImage
);

module.exports = router;
