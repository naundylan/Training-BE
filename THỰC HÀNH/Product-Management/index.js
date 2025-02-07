// Config
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

// connect database
const database = require("./config/database");
database.connect();

// Routes
const route = require("./routes/client/index.route")
const routeAdmin = require("./routes/admin/index.route")


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
routeAdmin(app);
route(app);

// Test
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})