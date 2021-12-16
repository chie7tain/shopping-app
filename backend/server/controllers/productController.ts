import { Request, Response, NextFunction } from "express";

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("products");
};
export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  res.send("product");
};
