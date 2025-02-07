// Nhúng epress và gọi Router
const express = require('express')
const router = express.Router();

// Nhúng controller
const controller = require("../../controllers/admin/dashboard.controller")
router.get('/', controller.dashboard)

// Xuất Router
module.exports = router