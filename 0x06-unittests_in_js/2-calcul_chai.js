<<<<<<< HEAD
function calculateNumber(type, a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = an + bn;
	break;
    case 'SUBTRACT':
	c = an - bn;
	break;
    case 'DIVIDE':
      if (bn === 0) {
            c = "Error";
      } else {
            c = an / bn;
      }
      break;
    }
    return c;
=======
/**
 * Adds, subtracts or divides two numbers depending
 * on operator type specified
 * @param   {string}  type  - SUM, SUBTRACT, or DIVIDE
 * @param   {number}  a
 * @param   {number}  b
 * @returns {number}  -  The result of operation of a and b
 */
function calculateNumber(type, a, b) {
  const numOne = Math.round(a);
  const numTwo = Math.round(b);
  switch (type) {
    case 'SUM':
      return numOne + numTwo;
    case 'SUBTRACT':
      return numOne - numTwo;
    case 'DIVIDE':
      if (!numTwo) return 'Error';
      return numOne / numTwo;
    default:
      throw new Error('Operation not supported. Type must be SUM, SUBTRACT or DIVIDE');
  }
>>>>>>> refs/remotes/origin/main
}

module.exports = calculateNumber;
