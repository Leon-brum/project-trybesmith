import ProductModel, {
  ProductSequelizeModel,
} from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../types/Product';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  const responseService: ServiceResponse<Product> = {
    status: 'SUCCESSFUL',
    data: newProduct.dataValues,
  };
  return responseService;
}

async function getProducts(): Promise<ProductSequelizeModel[]> {
  const products = await ProductModel.findAll();
  return products;
}

export default {
  createProduct,
  getProducts,
};