const Product = require("../../models/product.models")

// Product controllers
module.exports.index = async (req, res) => {
    // Get product list with conditions
    const productList = await Product.find({
        status: "active",
        deleted: false
    })


    // New price
    const newProducts = productList.map(item => {
        item.priceNew = (item.price - item.price*item.discountPercentage/100).toFixed(0)
        return item;
    })


    // Render page
    res.render("client/pages/products/index", {
            pageTitle: "Trang danh sách sản phẩm",
            products: newProducts
    })
}