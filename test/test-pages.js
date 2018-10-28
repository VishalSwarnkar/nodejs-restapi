const request = require('request');
const expect = require('chai').expect;

describe('Status and content', function(){

  it('Main page status', function(done){
    request('http://localhost:3000/', function(error, response, body){
      expect(response.statusCode).to.equal(200);
      done();
    })
  })

  it('content of the body', function(done){
    request('http://localhost:3000/', function(error, response, body){
      expect(response.body).to.equal('{"success":"true","description":"Welcome to nodejs rest api"}');
      done();
    })
  })

  it('page not found exception', function(done){
      request('http://localhost:3000/about', function(error, response, body) {
          expect(response.statusCode).to.equal(404);
          done();
      });
  })
})
