const axios = require('axios');


axios.get('https://wwww.google.com')
  .then((response) => {
      console.log(response);
  }).catch((err) => {
    console.log(err);
  });