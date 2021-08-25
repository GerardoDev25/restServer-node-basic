const { Router } = require("express");
const { check } = require("express-validator");

// * controllers
const {
   createCategory,
   getCategories,
   deleteCategory,
   getCategory,
} = require("../controllers/categories.controllers");

// * helpers
// const { existCategoryId } = require("../helpers/dbValidators");

// * middleware
const {
   validateJWT,
   ValidataInputs,
} = require("../middlewares");

// ! ----------------------------------------------------

const router = Router();

// ? GET all categories - public
router.get("/", getCategories);

// ? GET one category by id - public
router.get(
   "/:id",
   [
      // check("id", "isn't valid id").isMongoId(),
      // check("id").custom(existCategoryId),
      ,
      ValidataInputs,
   ],
   getCategory
);

// ? POST create a category - private with token
router.post(
   "/",
   [
      validateJWT,
      check("name", "the name is required").not().isEmpty(),
      ValidataInputs,
   ],
   createCategory
);

// ? PUT update - private with token
router.put("/:id", (req, res) => {
   res.json("put - id");
});

// ? DELETE delete a category - only admin
router.delete("/:id", deleteCategory);

module.exports = router;
