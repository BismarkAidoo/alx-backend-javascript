<<<<<<< HEAD
const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("Set up spy to use for each test", function() {
	sinon.spy(console, "log");
    });
    afterEach("restore spy after each test", function() {
	console.log.restore();
    });
    it("check that console.log is called with the right arg", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("check that console.log is called with the right arg", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
=======
/**
 * sendPaymentRequestToAPi method test suite.
 */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  describe('#pys Utils.calculateNumber()', function() {
    let spy;
    beforeEach(function() {
      spy = sinon.spy(console, 'log');
    });
    afterEach(function() {
      spy.restore();
    });

    it('should be return 120 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(100, 20);
      expect(spy.calledWith('The total is: 120')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });

    it('should be return 20 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(10, 10);
      expect(spy.calledWith('The total is: 20')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });
  });
>>>>>>> refs/remotes/origin/main
});
