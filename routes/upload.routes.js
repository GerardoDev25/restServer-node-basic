const { Router } = require("express");
const { check } = require("express-validator");
const { loadFile } = require("../controllers/upload.controller");

// * middleware
const {
   ValidataInputs,
} = require("../middlewares/validate-inputs");

// * controllers

// ! ----------------------------------------------------

const router = Router();

router.post("/", loadFile);

module.exports = router;
