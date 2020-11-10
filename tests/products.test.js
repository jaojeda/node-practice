const request = require('supertest');
const app = require('../app')
const connect = require('../api/utils/connect');
const mongoose = require('mongoose');

describe('products route', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('create product', async() => {
    const agent = request.agent(app);

    await agent
      .post('/api/v1/products')
      .send({ name: 'book', price: 12.00 })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          __v: 0
        })
      })
  })
});