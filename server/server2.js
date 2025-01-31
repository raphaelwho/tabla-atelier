const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const axios = require('axios')
const port = 3000
const Token = require('./config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./client/dist"));
app.post('/related', (req, res) => {
  let config = {
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id+'/related',
  headers: {
    'Authorization': Token
  }
  };
  axios(config)
  .then(function (response) {
    //console.log(JSON.stringify(response.data));
    res.send(response.data)
  })
  .catch(function (error) {
    console.log(error);
    res.end()
  });
})
app.post('/card', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id,
  headers: {
    'Authorization': Token
  }
  };

  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  res.end()
  });

})
app.post('/cardimage', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id+'/styles',
  headers: {
    'Authorization': Token
  }
  };
  axios(config)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  res.end()
  });

})

app.post('/review/meta', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id='+req.body.id,
  headers: {
    'Authorization': Token
  }
  };
  axios(config)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  res.end()
  });

})
<<<<<<< HEAD
app.post('/reviews', (req, res) => {
  var config = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.body.id}`,
    headers: {
      'Authorization': Token
    }
  };
  axios(config)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
  console.log(error);
  res.end()
  });
});
=======

>>>>>>> main


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

