// Config
const express = require('express')
require('dotenv').config()
const route = require("./routes/client/index.route")
const app = express()
const port = process.env.PORT

// connect database
const database = require("./config/database");
database.connect();

// Database Model
// const Product = mongoose.model('Product', {
//   title: String,
//   description: String,
//   price: Number,
//   discountPercentage: Number,
//   stock: Number,
//   thumbnail: String,
//   status: String,
//   position: Number,
//   deleted: Boolean
// });



// Set pug
app.set('views', './views')
app.set('view engine', 'pug')

// Public
app.use(express.static('public'))

// Routes
route(app);

// Test
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})