const Role = require("../models/role");
const UserModel = require("../models/user");
const CategoryModel = require("../models/category");

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

// const existCategoryId = async (id) => {
//    // * check if exist category
//    const category = await CategoryModel.findById(id);
//    if (!category) {
//       throw new Error(
//          `there is no a category with the id: ${id}`
//       );
//    }
// };

module.exports = {
   isValidRole,
   existEmail,
   existUserId,
   // existCategoryId,
};
