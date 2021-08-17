const Role = require("../models/role");

const isValidRole = async (role = "") => {
   const existRole = await Role.findOne({ role });
   if (!existRole) {
      throw new Error(
         `the role: ${role} isn't reguister to data base`
      );
   }
};

module.exports = { isValidRole };
