<<<<<<< HEAD
const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function(done) {
	request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(err, res, body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function() {
    it("check correct status code for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(body).to.equal("Payment methods for cart 12");
	    done();
	});
    });
    it("check correct status code for incorrect url", function(done) {
	request.get("http://localhost:7865/cart/kim", function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
});

describe("Available_payments page", function() {
    it("check correct status for correct url", function() {
	request.get("http://localhost:7865/available_payments", (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(res.statusCode).to.equal(200);
	    }
	});
    });
    it("check correct body content for correct url", function() {
	const option = {json: true};
	const payLoad = {
	    payment_methods: {
		credit_cards: true,
		paypal: false
	    }
	}
	request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.deep.equal(payLoad);
	    }
	});
    });
});

describe("Login", function() {
    it("check correct status code for request that's sent properly", function(done) {
	const opt = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(opt, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for request that's sent properly", function(done) {
	const opts = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(opts, function(err, res, body) {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.contain('Welcome JOE');
	    }
	    done();
	});
    });
    it("check correct status code for request that's not sent properly", function(done) {
	const op = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		usame: 'JOE'
	    }
	};
	request.post(op, function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
=======
/**
 * Express app test suite
 */
const { expect } = require('chai');
const request = require('request');

const HOST = '127.0.0.1';
const PORT = '7865';

describe('Express app test suite', function() {
  describe('/', function() {
    it('should return home page', function(done) {
      request.get(`http://${HOST}:${PORT}/`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('/cart:id', function() {
    it('should return cart page with cart id', function(done) {
      request.get(`http://${HOST}:${PORT}/cart/14`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 14');
        done();
      });
    });
    it('should return an error if :id parameter is not a number', function(done) {
      request.get(`http://${HOST}:${PORT}/cart/ae`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('/available_payment', function() {
    it('should get the the available payment method', function(done) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      request.get(`http://${HOST}:${PORT}/available_payments`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(JSON.stringify(expectedResponse));
        done();
      });
    });
  });
  describe('/login', function() {
    it('should get the the available payment method', function(done) {
      const userName = 'Tester';
      request.post({ url: `http://${HOST}:${PORT}/login`, form: { userName } },
        (error, res, body) => {
          if (error) expect(res.statusCode).to.not.equal(200);
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Tester');
          done();
        });
    });
  });
>>>>>>> refs/remotes/origin/main
});
