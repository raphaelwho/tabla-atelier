const express = require('express')
var bodyParser = require('body-parser')
const Token = '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'
const app = express()
const axios = require('axios')
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./client/dist"));


app.get('/related', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/22122/related',
  headers: {
    'Authorization': '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'
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
    'Authorization': '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'
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
    'Authorization': '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'
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

