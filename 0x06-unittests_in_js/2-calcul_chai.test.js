<<<<<<< HEAD
const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 1, 2)).to.equal(3);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
	});
    });
    describe("SUBTRACT", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
	});
    });
    describe("DIVIDE", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
	});
    });
=======
/**
 * 1-calculus.js.calculateNumber test suite
 */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber chai test suite', function() {
  describe('#SUM operation', function() {
    it('should return the sum of its rounded arguments', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('#SUBTRACT operation', function() {
    it('should return the subtraction of its rounded arguments', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
    });
  });

  describe('#DIVIDE operation', function() {
    it('should return the quotient from the division its rounded arguments', function() {
      expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
      expect(calculateNumber('DIVIDE', 3.1, 1.5)).to.equal(1.5);
      expect(calculateNumber('DIVIDE', 6.5, 1.5)).to.equal(3.5);
      expect(calculateNumber('DIVIDE', -3.7, -1.5)).to.equal(4);
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
  });

  describe('#INVALID operation', function() {
    it('should throw an exception for invalid type', function() {
      expect(calculateNumber.bind('MULTIPLY', 1, 3)).to.throw();
      expect(calculateNumber.bind(false, 1, 2)).to.throw();
    });
  });
>>>>>>> refs/remotes/origin/main
});
