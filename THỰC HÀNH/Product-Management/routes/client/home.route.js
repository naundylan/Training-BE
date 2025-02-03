const express = require('express')
const router = express.Router();

const controller = require("../../controllers/client/home.controllers")

router.get('/', controller.index)

module.exports = router