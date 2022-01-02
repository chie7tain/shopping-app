import { Request, Response, NextFunction } from "express";
const products = require("../../data/products");

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    products,
  });
};
export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  const product = products.find(
    (prod: { _id: string }) => prod._id === req.params.id
  );
  res.json(product);
};
