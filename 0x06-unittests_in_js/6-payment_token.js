<<<<<<< HEAD
function getPaymentTokenFromAPI(success) {
    if (success) {
	return new Promise((resolve) => {
          resolve({data: 'Successful response from the API' });
	});
    }
=======
/**
 * Checks state of payment token
 * @param   {boolean} success
 * @returns {promise}
 */
function getPaymentTokenFromAPI(success) {
  if (success) return Promise.resolve({ data: 'Successful response from the API' });
>>>>>>> refs/remotes/origin/main
}

module.exports = getPaymentTokenFromAPI;
