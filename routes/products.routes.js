const { Router } = require("express");
const {
   getProducts,
   getProduct,
   createProduct,
   updateProduct,
   dateteProduct,
} = require("../controllers/products.controller");

const router = Router();

// ? GET all productos - public
router.get("/", getProducts);

// ? GET  productos by id - public
router.get("/:id", getProduct);

// ? POST create product - private with token
router.post("/:id", createProduct);

// ? PUT update a product - private with token
router.put("/:id", updateProduct);

// ? DELETE a product - private only admin
router.delete("/:id", dateteProduct);

module.exports = router;
