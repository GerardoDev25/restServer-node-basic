const { Router } = require("express");
const { check } = require("express-validator");

// * middleware
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs");

// * controllers
const { loadFile } = require("../controllers/upload.controller");

// ! ----------------------------------------------------

const router = Router();

router.post("/", loadFile);

module.exports = router;
