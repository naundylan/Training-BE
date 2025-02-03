// Product controllers
module.exports.index = (req, res) => {
    res.render("client/pages/products/index", {
            pageTitle: "Trang danh sách sản phẩm"
    })
}