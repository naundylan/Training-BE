const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Test')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
const app = express()
const port = 3000

const test = mongoose.model('test', new mongoose.Schema ({
  title : String,
  price : Number,
  discountPercentage : Number
}, { collection: "test"}));

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/products', async (req, res) => {
  const productList = await test.find({});
  // console.log(productList);
  res.render('products', {
    title:"Danh sách sản phẩm",
    products: productList
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})