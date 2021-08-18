const { Router } = require("express");
const { check } = require("express-validator");

// * middleware
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs");

// * controllers
const { login } = require("../controllers/auth.controller");

// ! ----------------------------------------------------

const router = Router();

// ? POST
router.post(
   "/login",
   [
      check("email", "the email is required").isEmail(),
      check("password", "the password is required")
         .not()
         .isEmpty(),
      ValidataInputs,
   ],
   login
);

module.exports = router;
