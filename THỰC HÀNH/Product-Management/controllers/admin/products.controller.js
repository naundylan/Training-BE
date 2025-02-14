// Admin products controllers
const Product = require("../../models/product.models")
const filterStatusHelper = require("../../helpers/filterStatus")
module.exports.index = async (req, res) => {
    
    let find = {
        deleted: false,
    }
    
    // Button Status
    const filterStatus = filterStatusHelper(req.query);
    
    if(req.query.status) {
        find.status = req.query.status;
    }
    // End Button Status

    // Filter Function
    let keyword = "";
    if(req.query.keyword) {
        keyword = req.query.keyword;
        const regex = new RegExp(keyword, "i")
        find.title = regex;
    }
    // End Filter Function

    // Products List
    const products = await Product.find(find)

    res.render("admin/pages/products/index", {
        pageTitle: "Trang danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus,
        keyword: keyword
    })
};