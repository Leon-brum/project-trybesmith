import { Request, Response } from 'express';
import orderService from '../service/order';

async function getOrders(req:Request, res:Response): Promise<Response> {
  const orders = await orderService.getOrders();
  return res.status(200).json(orders);
}

export default {
  getOrders,
};