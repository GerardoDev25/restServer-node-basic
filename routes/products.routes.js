const { Router } = require("express");
const { check } = require("express-validator");

// ? controllers
const {
   getProducts,
   getProduct,
   createProduct,
   updateProduct,
   dateteProduct,
} = require("../controllers/products.controller");
const { existProductId } = require("../helpers/dbValidators");

// ? middleware
const {
   validateJWT,
   ValidataInputs,
   haveRole,
   isAdminRole,
} = require("../middlewares");

// ! ----------------------------------------------------

const router = Router();

// ? GET all productos - public
router.get("/", getProducts);

// ? GET  productos by id - public
router.get(
   "/:id",
   [
      check("id", "the id isn't valid").isMongoId(),
      check("id").custom(existProductId),

      ValidataInputs,
   ],
   getProduct
);

// ? POST create product - private with token
router.post(
   "/:id",
   [
      validateJWT,
      check("name", "the name is required").not().isEmpty(),
      check("state", "the state is required").not().isEmpty(),
      haveRole("ADMIN_ROLE", "SELL_ROLE"),
      ValidataInputs,
   ],
   createProduct
);

// ? PUT update a product - private with token
router.put(
   "/:id",
   [
      validateJWT,
      check("id", "the id is not valid").isMongoId(),
      check("id").custom(existProductId),
      check("name", "the name is requerid").not().isEmpty(),
      haveRole("ADMIN_ROLE", "SELL_ROLE"),
      ValidataInputs,
   ],
   updateProduct
);

// ? DELETE a product - private only admin
router.delete(
   "/:id",
   [
      validateJWT,
      check("id", "the id is not valid").isMongoId(),
      check("id").custom(existProductId),
      isAdminRole,
      ValidataInputs,
   ],
   dateteProduct
);

module.exports = router;
