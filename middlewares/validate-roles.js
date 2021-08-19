const { response, request } = require("express");

const isAdminRole = (req = request, res = response, next) => {
   if (!req.userAuth)
      return res
         .status(500)
         .json(
            "you want to verify the role without validating the token first"
         );

   const { role, name } = req.userAuth;

   if (role !== "ADMIN_ROLE")
      return res
         .status(401)
         .json({ msg: `the user: ${name} isn't admin` });

   next();
};

module.exports = {
   isAdminRole,
};
