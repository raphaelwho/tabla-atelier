const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const port = 3000;
const token = require('./server.config.js');
const cors = require('cors');

app.use(express.static("./client/dist"));

var jsonParser = bodyParser.json();

/* app.post('/related', (req, res) => {
  let config = {
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id+'/related',
  headers: {
    'Authorization': token
  }
  };
  axios(config)
  .then(function (response) {
    //console.log(JSON.stringify(response.data));
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });

})

app.post('/card', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id,
  headers: {
    'Authorization': token
  }
  };

  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  });

})
app.post('/cardimage', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id+'/styles',
  headers: {
    'Authorization': token
  }
  };
  axios(config)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  });

})
app.post('/review/meta', (req, res) => {

  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id='+req.body.id,
  headers: {
    'Authorization': token
  }
  };
  axios(config)
  .then(function (response) {

    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  });

}) */

app.post('/reviews', jsonParser, (req, res) => {

  var config = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.body.id}`,
    headers: {
      'Authorization': token.token
    }
  };
  axios(config)
  .then(function (response) {

    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})