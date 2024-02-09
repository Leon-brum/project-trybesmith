import { Request, Response } from 'express';
import productService from '../service/product';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const newProduct = await productService.createProduct(req.body);
  if (newProduct.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(newProduct.status)).json(newProduct.data);
  }
  return res.status(201).json(newProduct.data);
}

async function getProducts(_req: Request, res: Response): Promise<Response> {
  const products = await productService.getProducts();
  return res.status(200).json(products);
}

export default {
  createProduct,
  getProducts,
};