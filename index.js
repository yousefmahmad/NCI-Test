const express = require('express');
const axios = require('axios')
const app = express();

const port = process.env.PORT || 3000;

// retrieves data from the API and fulfils promise with async and await
const getData = async () => {
  return await axios({
    url: 'https://health.data.ny.gov/resource/gnzp-ekau.json',
    {
      headers: {
        'X-App-Token': 'uc3bTDv5nIow7e035i9UpQdE8'
      }
    }
  })
}

// console log data to see data results retrieved
  console.log(getData())






















