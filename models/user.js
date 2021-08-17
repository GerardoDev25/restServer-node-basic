const { Schema, model } = require("mongoose");

const UserSchema = Schema({
   name: {
      type: String,
      required: [true, "the name is required"],
   },
   email: {
      type: String,
      required: [true, "the email is required"],
      unique: true,
   },
   password: {
      type: String,
      required: [true, "the password is required"],
   },
   image: {
      type: String,
   },
   role: {
      type: String,
      required: true,
      // enum: ["ADMIN_ROLE", "USER_ROLE"],
   },
   state: {
      type: Boolean,
      default: true,
   },
   google: {
      type: Boolean,
      default: false,
   },
});

// ? rewrite a functin to remove password and version
UserSchema.methods.toJSON = function () {
   const { __v, password, ...users } = this.toObject();
   return users;
};

module.exports = model("User", UserSchema);
