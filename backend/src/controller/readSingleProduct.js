const productModel = require("../model/productModel")

const readSingleProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId 
        const product = await productModel.findById(productId)
        if(product){
        res.status(200).json({success : true, message : 'Product Found', data : product})
        }
        else {
            res.status(200).json({success: true, message : 'Product not found'})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = readSingleProduct