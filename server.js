const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')
require('dotenv').config()

const config = {
  headers: { Authorization: `Token token=fd2ae3c0998894af046caf8961770dc7`}
}

app.use(bodyParser.json())

app.get('/podcasts', async (req, res) => {
  try {
    const response = await axios.get(`https://cms.megaphone.fm/api/networks/126216ae-056d-11ee-9189-676656f0e82d/podcasts`, config);
    res.status(200).json( response.data );
  } catch (error) {
    res.json(error);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080')
})