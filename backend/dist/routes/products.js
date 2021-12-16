"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
router.route("/").get((req, res, next) => {
    res.send("api is running");
});
router.route("/api/products").get(productController.getProducts);
router.route("/api/products/:id").get(productController.getProduct);
exports.default = router;
//# sourceMappingURL=products.js.map