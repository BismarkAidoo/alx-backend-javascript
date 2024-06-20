<<<<<<< HEAD
function calculateNumber(a, b) {
    const an = Math.round(a);
    const bn = Math.round(b);
    const c = an + bn;
    return c;
=======
/**
 * Adds two numbers
 * @param   {number}  a
 * @param   {number}  b
 * @returns {number}  -  The sum of a and b
 */
function calculateNumber(a, b) {
  const numOne = Math.round(a);
  const numTwo = Math.round(b);
  return numOne + numTwo;
>>>>>>> refs/remotes/origin/main
}

module.exports = calculateNumber;
