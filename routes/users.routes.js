const { Router } = require("express");
const { check } = require("express-validator");

// * middlewares
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs.js");

// * controllers
const {
   userGet,
   userPost,
   userPut,
   userDelete,
   userPatch,
} = require("../controllers/users.controllers.js");

const router = Router();

// ? routes

router.get("/", userGet);

router.post(
   "/",
   [
      check("name", "the name is required").not().isEmpty(),
      check(
         "password",
         "the password is mandatory and must have more than 6 letters"
      ).isLength({ min: 6 }),

      check("email", "the email isn't valid").isEmail(),
      check("role", "isn't valid role").isIn([
         "ADMIN_ROLE",
         "USER_ROLE",
      ]),
      ValidataInputs,
   ],
   userPost
);

router.put("/:id", userPut);

router.delete("/", userDelete);

router.patch("/", userPatch);

module.exports = router;
