<<<<<<< HEAD
const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)
	    .then((data) => {
		expect(data).to.have.property('data');
		done();
	    });
    });
=======
/**
 * getPaymentTokenFromAPI test suite
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  describe('#Async test', function() {
    
    it('should test response from payment API', function(done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.be.an('object')
            .with.property('data', 'Successful response from the API');
          done();
        });
    });
  });
>>>>>>> refs/remotes/origin/main
});
