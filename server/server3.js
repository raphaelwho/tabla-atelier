const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const Token = require('./config');

app.use(express.static("./client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
