import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Lista todos os orders', async function () {
    sinon.stub(OrderModel, 'findAll').resolves([]);
    const response = await chai.request(app).get('/orders');
    expect(response.status).to.be.equal(200);
  });
});
