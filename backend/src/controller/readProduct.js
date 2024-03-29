const productModel = require("../model/productModel")

const readProduct = async (req, res, next) => {
    try {
        const productList = await productModel.find()

        res.status(200).json({success: true, message : 'Productlist Found', data : productList})
    } catch (error) {
        next(error)
    }
}

module.exports = readProduct