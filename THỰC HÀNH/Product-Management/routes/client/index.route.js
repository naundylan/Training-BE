// Nhúng Router
const productRoutes = require("./product.route")
const homeRoutes = require("./home.route")

// Xuất Router
module.exports = (app) => {
    app.use("/", homeRoutes)

    app.use("/products", productRoutes)
}