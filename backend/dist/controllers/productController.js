"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const products = require("../../data/products");
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        products,
    });
};
exports.getProduct = (req, res, next) => {
    const product = products.find((prod) => prod._id === req.params.id);
    res.json(product);
};
//# sourceMappingURL=productController.js.map