const express = require('express')
require('dotenv').config()

const router = express.Router()

const {
    addDataAduan
} = require('../controllers/pengaduan-controller')

router.post('/api/pengaduan', addDataAduan)

module.exports = router