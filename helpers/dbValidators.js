const Role = require("../models/role");
const UserModel = require("../models/user");

const isValidRole = async (role = "") => {
   const existRole = await Role.findOne({ role });
   if (!existRole) {
      throw new Error(
         `the role: ${role} isn't reguister to data base`
      );
   }
};

const existEmail = async (email = "") => {
   // * check if exist the email
   const exitEmail = await UserModel.findOne({ email });
   if (exitEmail) {
      throw new Error("this email exist in the data base");
   }
};

module.exports = { isValidRole, existEmail };
