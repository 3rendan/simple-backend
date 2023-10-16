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
    const response = await axios.get(`https://pt95erup1m.execute-api.us-east-1.amazonaws.com/prod/podcasts`)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.get(`/ae-episodes`, async (req, res) => {
  try {
    const response = await axios.get(`https://pt95erup1m.execute-api.us-east-1.amazonaws.com/prod/ae-episodes`)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.get(`/gravy-episodes`, async (req, res) => {
  try {
    const response = await axios.get(`https://pt95erup1m.execute-api.us-east-1.amazonaws.com/prod/gravy-episodes`)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.get(`/food-episodes`, async (req, res) => {
  try {
    const response = await axios.get(`https://pt95erup1m.execute-api.us-east-1.amazonaws.com/prod/food-episodes`)
    res.status(200).json( response.data )
  } catch (error) {
    console.log(error)
  }
})

app.listen(8080, () => {
  console.log('listening on port 8080')
})