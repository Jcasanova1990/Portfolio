const express = require('express')
const router = express.Router()
const stockCtrl = require('../../controllers/api/stocks')

// Index incomplete
router.get('/', stockCtrl.index, stockCtrl.jsonStocks)
// Create
router.post('/', stockCtrl.create, stockCtrl.jsonStock)
// Show
router.get('/:symbol', stockCtrl.show, stockCtrl.jsonStock)

module.exports = router