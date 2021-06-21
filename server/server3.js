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

    console.log("Active Product Call");
    let config = {
        method: 'GET',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/' + 22123, // Force product id until logic is implemented
        headers: { 'Authorization': Token.Token }
    };

    // Call to products API and return as res
    axios(config)
        .then(function (response) {
            console.log(response);
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  