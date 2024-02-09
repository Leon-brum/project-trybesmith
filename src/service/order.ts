import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function getOrders(): Promise<unknown> {
  const orders = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: { exclude: ['name', 'price', 'orderId'] },
    }],
  });
  const ordersValues = orders.map((order) => order.dataValues);
  const ordersWithProducts = ordersValues.map((order) => ({
    id: order.id,
    userId: order.userId,
    productIds: order.productIds?.map((product) => product.id),
  }));
  return ordersWithProducts;
}

export default {
  getOrders,
};