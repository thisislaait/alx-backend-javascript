// eslint-disable-next-line no-unused-vars
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({data: 'Successful response from the API'});
  }
});

export default getPaymentTokenFromAPI;
