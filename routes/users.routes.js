const { Router } = require("express");

const {
   userGet,
   userPost,
   userPut,
   userDelete,
   userPatch,
} = require("../controllers/users.controllers.js");

const router = Router();

router.get("/", userGet);
router.post("/", userPost);
router.put("/", userPut);
router.delete("/", userDelete);
router.patch("/", userPatch);

module.exports = router;
