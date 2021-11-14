const PORT = 8000
const express = require('express');
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req :Request<P,ResBody,ReqBody,ReqQuery,Locals> ,res :Response<ResBody,Locals> ) => {
  res.json('hello')
})
app.listen(PORT, () => console.log('server running on PORT ${PORT}'))
