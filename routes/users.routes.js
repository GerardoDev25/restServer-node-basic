const { Router } = require("express");
const { check } = require("express-validator");

const {
   userGet,
   userPost,
   userPut,
   userDelete,
   userPatch,
} = require("../controllers/users.controllers.js");

const router = Router();

router.get("/", userGet);
router.post(
   "/",
   [check("email", "the email isn't valid").not().isEmpty()],
   userPost
);
router.put("/:id", userPut);
router.delete("/", userDelete);
router.patch("/", userPatch);

module.exports = router;
