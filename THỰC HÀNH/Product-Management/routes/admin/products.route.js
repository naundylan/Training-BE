// Nhúng epress và gọi Router
const express = require('express')
const router = express.Router();

// Nhúng controller
const controller = require("../../controllers/admin/products.controller")
router.get('/', controller.index)

// Xuất Router
module.exports = router