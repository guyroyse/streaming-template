const Redis = require("ioredis")

const express = require('express')
const app = express()
const port = 3000

const redis = new Redis('redis://powerspork.local:6379')

app.use(express.static('static'))

app.get('/api/stream-info', async (req, res) => {

  let title = await redis.get('stream:assets:title')
  let subtitle = await redis.get('stream:assets:subtitle')
  res.send({ title, subtitle })

})

app.listen(port)
