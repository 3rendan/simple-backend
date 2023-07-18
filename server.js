const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')
require('dotenv').config()

const config = {
  headers: { Authorization: `Token token=${process.env.API_TOKEN}`}
}

app.use(bodyParser.json())

app.get('/podcasts', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/podcasts`, config);
    res.status(200).json( response.data );
  } catch (error) {
    res.json(error);
  }
});

app.listen(3001, () => {
  console.log('listening on port 3001')
})