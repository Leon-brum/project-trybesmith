import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('Testa o metodo POST para product', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Verifica se é possivel cadastrar um produto', async function () {
    const mock = ProductModel.build({ name: 'Foice da morte', price: '50', orderId: 4 });
    sinon.stub(ProductModel, 'create').resolves(mock);
    const response = await chai.request(app).post('/products').send({ name: 'Foice da morte', price: '50', orderId: 4 });
    expect(response.status).to.equal(201);
   })
});
