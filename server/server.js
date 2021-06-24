const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const Token = require('./config/config.js');
const cors = require('cors');
var multer = require('multer');
var FormData = require('form-data');

// Middlewear
app.use(express.static("./client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
var upload = multer({ dest: 'uploads/' });

app.get('/active-product', (req, res) => {

  let config = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + 22122, // Force product id until logic is implemented
      headers: { 'Authorization': Token.Git }
  };

  // Call to products API and return as res
  axios(config)
      .then(function (response) {
          res.send(response.data)
      })
      .catch(function (error) {
          console.log(error);
      });
});

app.get('/active-product-styles', (req, res) => {

  let config = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + 22122 + '/styles', // Force product id until logic is implemented
      headers: { 'Authorization': Token.Git }
  };

  // Call to products API and return as res
  axios(config)
      .then(function (response) {
          res.send(response.data)
      })
      .catch(function (error) {
          console.log(error);
      });
});


// Posts to RELATED endpoint
app.post('/related', (req, res) => {

  let config = {
  method: 'GET',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id+'/related',
  headers: { 'Authorization': Token.Git } };

  axios(config)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post('/card', (req, res) => {

  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id,
  headers: { 'Authorization': Token.Git } };

  axios(config)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
    console.log(error);
    });
});

app.post('/cardimage', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'+req.body.id+'/styles',
  headers: { 'Authorization': Token.Git} };

  axios(config)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
    console.log(error);
    });

});

app.post('/review/meta', (req, res) => {
  let config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id='+req.body.id,
  headers: { 'Authorization': Token.Git }};
  axios(config)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

});

app.post('/reviews', (req, res) => {
  var config = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.body.id}`,
    headers: { 'Authorization': Token.Git }};

  axios(config)
    .then(function (response) {
      res.send(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.post('/uploadreviewimage', upload.single('image'), function (req, res) {

  cloudinary.v2.uploader.upload(req.file.path,
  function(error, result) {
    if (error) {
      console.log(error);
    } else {
      res.status(201).send({postedURL: result.url});
    }
  });

});

app.post('/reviewsproductmeta', (req, res) => {

  var configGetReviewsById = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.body.id}`,
    headers: {
      'Authorization': Token.Git
    }
  };
  var configGetProductById = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.body.id}`,
    headers: {
      'Authorization': Token.Git
    }
  };
  var configGetReviewsMetaById = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${req.body.id}`,
    headers: {
      'Authorization': Token.Git
    }
  };

  var getReviewsById = () => {
    return axios(configGetReviewsById);
  };
  var getProductById = () => {
    return axios(configGetProductById);
  };
  var getReviewsMetaById = () => {
    return axios(configGetReviewsMetaById);
  };

  Promise.all([getReviewsById(), getProductById(), getReviewsMetaById()])
  .then(function (response) {
    response[0].data.name = response[1].data.name;
    response[0].data.ratings = response[2].data.ratings;
    response[0].data.recommended = response[2].data.recommended;
    response[0].data.characteristics = response[2].data.characteristics;
    res.send(response[0].data);
  })
  .catch(function (error) {
  console.log(error);
  });

});

app.post('/addreview', (req, res) => {

  var configAddReview = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    data: req.body,
    headers: {
      'Authorization': Token.Git
    }
  };

  var addReview = () => {
    return axios(configAddReview);
  };

  Promise.all([addReview()])
  .then(function (response) {
    res.sendStatus(201);
  })
  .catch(function (error) {
  console.log(error);
  });

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})