// Nhúng Router
const dashboardRoutes = require("./dashboard.route")
const systemConfig = require("../../config/system")

// Xuất Router
module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAdmin;
    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes)
}