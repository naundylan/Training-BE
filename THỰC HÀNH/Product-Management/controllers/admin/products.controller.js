// Admin products controllers
const Product = require("../../models/product.models")

module.exports.index = async (req, res) => {
    const products = await Product.find({
        
    })

    console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products: products
    })
};