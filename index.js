const express = require('express');
const axios = require('axios')
const app = express();


// retrieves data from the API and fulfils promise with async and await
const getData = async () => {
  return await axios({
    url: 'https://health.data.ny.gov/resource/gnzp-ekau.json', 
    // Some sort of syntax error here that I'm getting stuck on
    {
      //   // it's an OAuth end point and so you need to add this header in your axios get with the app token
        headers: {
          'X-App-Token': 'uc3bTDv5nIow7e035i9UpQdE8'
        }
      }
  })
}

// console log data to see data results retrieved
  console.log(getData())

  app.listen(4040, () => console.log('working on port 4040'));





















