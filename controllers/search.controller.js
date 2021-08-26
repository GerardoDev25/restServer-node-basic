const { response, request } = require("express");

// ? Get serach products and categories
const search = (req = request, res = response) => {
   const { collection, term } = req.params;

   res.json({ collection, term });
};

module.exports = { search };
