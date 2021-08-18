const { response, request } = require("express");

const login = (req = request, res = response) => {
   res.json({
      mshg: "login ok",
   });
};

module.exports = { login };
