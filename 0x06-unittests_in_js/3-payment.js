<<<<<<< HEAD

const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
=======
const Utils = require('./utils');
/**
 * Computes total cost and display it.
 * @param {number} totalAmount   - products total cost
 * @param {number} totalShipping - shipping cost
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalCost}`);
>>>>>>> refs/remotes/origin/main
}

module.exports = sendPaymentRequestToApi;
