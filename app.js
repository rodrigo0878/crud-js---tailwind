require('dotenv').config();

//const { publicDecrypt } = require('crypto');
const express = require('express')
const app = express()


app.get('/public', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`servidor corriendo en el puerto${process.env.PORT}`)
})


app.use(express.static('public'))



