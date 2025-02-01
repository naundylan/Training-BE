const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render("client\page\home\index")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})