import { NextFunction, Request, Response } from "express";

const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.route("/").get((req: Request, res: Response, next: NextFunction) => {
  res.send("api is running");
});
router.route("/api/products").get(productController.getProducts);
router.route("/api/products/:id").get(productController.getProduct);

export default router;
