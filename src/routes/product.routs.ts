import express from 'express';
import productController from '../controller/product';

const productRouter = express.Router();

productRouter.post('/', productController.createProduct);
productRouter.get('/', productController.getProducts);

export default productRouter;