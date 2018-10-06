const axios = require('axios');

var pageBase = 'https://mikaelbang.github.io/';
var page = pageBase+'about';

// Make a request for a user with a given ID
axios.get(page)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });