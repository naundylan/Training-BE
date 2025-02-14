// Admin products controllers
const Product = require("../../models/product.models")

module.exports.index = async (req, res) => {
    // Button Status
    let filterStatus = [
        {
            name: "Tất cả",
            status: "",
            class: ""
        },
        {
            name: "Hoạt động",
            status: "active",
            class: ""
        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            class: ""
        }
    ]
    if(req.query.status) {
        const index = filterStatus.findIndex(item => item.status == req.query.status)
        filterStatus[index].class = "active";
    }
    else {
        const index = filterStatus.findIndex(item => item.status == "")
        filterStatus[index].class = "active";
    }
    let find = {
        deleted: false,
    }
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