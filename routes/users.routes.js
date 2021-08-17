const { Router } = require("express");
const { check } = require("express-validator");

// * middlewares
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs.js");
const Role = require("../models/role");

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
      check(
         "password",
         "the password is mandatory and must have more than 6 letters"
      ).isLength({ min: 6 }),

      check("email", "the email isn't valid").isEmail(),
      // check("role", "isn't valid role").isIn([
      //    "ADMIN_ROLE",
      //    "USER_ROLE",
      // ]),
      check("role").custom(async (role = "") => {
         const existRole = await Role.findOne({ role });
         if (!existRole) {
            throw new Error(
               `the role: ${role} isn't reguister to data base`
            );
         }
      }),
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
