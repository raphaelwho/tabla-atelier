const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var FormData = require('form-data');
const app = express();
const axios = require('axios');
const port = 3000;
const token = require('./server.config.js');
const cors = require('cors');

app.use(express.static("./client/dist"));

var jsonParser = bodyParser.json();

app.post('/uploadreviewimage', upload.single('image'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  var multipart = new FormData();
  multipart.append('file', req.file.buffer);
  multipart.append('upload_preset', token.cloudinaryUploadPreset);
  multipart.append('name', req.file.originalname);
  multipart.append('cloud_name', 'dilcl3ahb');

  console.log(multipart);

    axios({
    method: 'POST',
    url: 'https://api.cloudinary.com/v1_1/dilcl3ahb/image/upload',
    data: multipart
  })
    .then(function (response) {
      console.log(response);
      console.log('response data:', response.data);
    })
    .catch(function (error) {
      console.log(error);
      });

})

app.post('/reviews', jsonParser, (req, res) => {

  var configGetReviewsById = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${req.body.id}`,
    headers: {
      'Authorization': token.token
    }
  };
  var configGetProductById = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.body.id}`,
    headers: {
      'Authorization': token.token
    }
  };
  var configGetReviewsMetaById = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${req.body.id}`,
    headers: {
      'Authorization': token.token
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})