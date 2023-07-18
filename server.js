const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')

const config = {
  headers: { Authorization: `Token token=e30660bc4a1f0d005a74ba56e705eca2`}
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

app.listen(3001, () => {
  console.log('listening on port 3001')
})