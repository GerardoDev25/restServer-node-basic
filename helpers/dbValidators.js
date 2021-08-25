const Role = require("../models/role");
const {
   Category: CategoryModel,
   User: UserModel,
} = require("../models");

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
         `the user with id:${id} not exist in the data base`
      );
   }
};

// ? valid category id
const existcategoryId = async (id) => {
   // * check if exist the email
   const exitCategory = await CategoryModel.findById(id);
   if (!exitCategory) {
      throw new Error(
         `the category with id:${id} not exist in the data base`
      );
   }
};

module.exports = {
   isValidRole,
   existEmail,
   existUserId,
   existcategoryId,
};
