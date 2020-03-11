const axios = require('axios');

axios.get('https://coronavirus-tracker-api.herokuapp.com/confirmed')
  .then(function (response) {
    console.log(response.data.last_updated.substring(0,10));
  })
  .catch(function (error) {
    console.log(error);
  });
  
url = "https://coronavirus-tracker-api.herokuapp.com/confirmed";
