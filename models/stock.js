const { model, Schema } = require('mongoose')


const stockSchema = new Schema ({
    name: String,
    symbol: {type: String, unique: true}, // key difference
    lastPrice: Number,
    change: Number,
    high: Number,
    low: Number,
    open: Number
}, {
    timestamps: true
})

const Stock = model('Stock', stockSchema)

module.exports = Stock