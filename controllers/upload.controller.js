const { request, response } = require("express");

const loadFile = async (req = request, res = response) => {
   res.json("load file");
};

module.exports = { loadFile };
