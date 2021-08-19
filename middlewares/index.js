const ValidataInputs = require("../middlewares/validate-inputs.js");

const validateJWT = require("../middlewares/validate-jwt.js");

const validateRoles = require("../middlewares/validate-roles.js");

module.exports = {
   ...ValidataInputs,
   ...validateJWT,
   ...validateRoles,
};
