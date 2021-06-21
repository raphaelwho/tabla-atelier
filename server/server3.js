const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const Token = require('./config/config.js');

// Middlewear
app.use(express.static("./client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/active-product', (req, res) => {

    let config = {
        method: 'GET',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + 22122, // Force product id until logic is implemented
        headers: { 'Authorization': Token.Token }
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
        headers: { 'Authorization': Token.Token }
    };

    // Call to products API and return as res
    axios(config)
        .then(function (response) {
            console.log(response.data.results[0].skus);
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  