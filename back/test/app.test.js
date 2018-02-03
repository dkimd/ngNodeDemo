const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app.js');

describe('GET /', () => {
  it('should return 404 Error, top route remove', (done) => {
    request(app)
      .get('/')
      .expect(404, done);
  });
});

describe('GET /api/v1/email', () => {
  it('should return 200 Ok for health check', (done) => {
    request(app)
      .get('/api/v1/email')
      .end(function(err, res) {
        expect(res.body).to.be.ok;
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });
});