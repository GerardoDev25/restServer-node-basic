const { Router } = require("express");
const { check } = require("express-validator");

// * controllers
const { createCategory } = require("../controllers/categories");

// * middleware
const {
   validateJWT,
   ValidataInputs,
} = require("../middlewares");

// ! ----------------------------------------------------

const router = Router();

// ? GET all categories - public
router.get("/", (req, res) => {
   res.json("get");
});

// ? GET one category by id - public
router.get("/:id", (req, res) => {
   res.json("get - id");
});

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
router.delete("/:id", (req, res) => {
   res.json("delete");
});

module.exports = router;
