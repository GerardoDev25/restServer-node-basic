const { Router } = require("express");
const { check } = require("express-validator");

// * middlewares
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs.js");
const {
   isValidRole,
   existEmail,
} = require("../helpers/dbValidators.js");

// * controllers
const {
   userGet,
   userPost,
   userPut,
   userDelete,
   userPatch,
} = require("../controllers/users.controllers.js");

const router = Router();

// ? GET
router.get("/", userGet);

// ? POST
router.post(
   "/",
   [
      check("name", "the name is required").not().isEmpty(),
      check("email", "the email isn't valid").isEmail(),
      check("email").custom(existEmail),
      check("role").custom(isValidRole),
      check(
         "password",
         "the password is mandatory and must have more than 6 letters"
      ).isLength({ min: 6 }),
      ValidataInputs,
   ],
   userPost
);

// ? PUT
router.put("/:id", userPut);

// ? DELETE
router.delete("/", userDelete);

// ? PATCH
router.patch("/", userPatch);

module.exports = router;
