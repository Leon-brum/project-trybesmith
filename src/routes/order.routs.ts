import express from 'express';
import orderController from '../controller/order';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getOrders);

export default orderRouter;