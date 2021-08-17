const Role = require("../models/role");
const UserModel = require("../models/user");

// ? valid role
const isValidRole = async (role = "") => {
   const existRole = await Role.findOne({ role });
   if (!existRole) {
      throw new Error(
         `the role: ${role} isn't reguister to data base`
      );
   }
};

// ? valid Email exits
const existEmail = async (email = "") => {
   // * check if exist the email
   const exitEmail = await UserModel.findOne({ email });
   if (exitEmail) {
      throw new Error("this email exist in the data base");
   }
};

// ? valid user id
const existUserId = async (id) => {
   // * check if exist the email
   const exitUser = await UserModel.findById(id);
   if (!exitUser) {
      throw new Error(
         `this user with id:${id} not exist in the data base`
      );
   }
};

module.exports = { isValidRole, existEmail, existUserId };
