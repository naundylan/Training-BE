// Admin products controllers
module.exports.index = (req, res) => {
    res.render("admin/pages/products/index", {
        pageTitle: "Trang danh sách sản phẩm"
    })
};