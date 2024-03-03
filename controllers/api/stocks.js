const Stock = require('../../models/stock')


module.exports = {
    create,
    index,
    show,
    jsonStocks,
    jsonStock
}

// jsonTodos jsonTodo
// viewControllers

function jsonStock (_, res) {
    res.json(res.locals.data.stock)
}

function jsonStocks (_, res) {
    res.json(res.locals.data.stocks)
}

/****** C - Create *******/
async function create(req, res, next){
    try {
        const stock = await Stock.create(req.body)
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Read *****/

async function index(_, res ,next) {
    try {
        const stocks = await Stock.find()
        res.locals.data.stocks = stocks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function show(req,res,next) {
    try {
        const stock = await Stock.findOne({symbol: req.params.symbol})
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
