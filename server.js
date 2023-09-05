const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const config = {
  headers: { Authorization: `Token token=fd2ae3c0998894af046caf8961770dc7`}
}

app.use(bodyParser.json())
app.use(cors())
app.get('/podcasts', async (req, res) => {
  try {
    const response = await axios.get(`https://cms.megaphone.fm/api/networks/126216ae-056d-11ee-9189-676656f0e82d/podcasts`, config)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.get(`/AE-episodes`, async (req, res) => {
  try {
    const response = await axios.get(`https://cms.megaphone.fm/api/networks/126216ae-056d-11ee-9189-676656f0e82d/podcasts/06c45fb2-1c17-11ee-9eb6-ff2ec7065f86/episodes`, config)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.get(`/gravy-episodes`, async (req, res) => {
  try {
    const response = await axios.get(`https://cms.megaphone.fm/api/networks/126216ae-056d-11ee-9189-676656f0e82d/podcasts/f5054664-21a3-11ee-8031-c7f78aa2421e/episodes`, config)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.get(`/food-episodes`, async (req, res) => {
  try {
    const response = await axios.get(`https://cms.megaphone.fm/api/networks/126216ae-056d-11ee-9189-676656f0e82d/podcasts/299729f4-056d-11ee-974e-f7d1b7547a45/episodes`, config)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.listen(80, () => {
  console.log('listening on port 80')
})