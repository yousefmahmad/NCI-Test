const express = require('express');
const axios = require('axios')
const app = express();

const port = process.env.PORT || 3000;

const getData = async () => {
  return await axios({
    url: 'https://health.data.ny.gov/resource/gnzp-ekau.json'
  })
}

(async () => {
  console.log( await getData())
})





















