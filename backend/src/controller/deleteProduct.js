const productModel = require("../model/productModel")

const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId 
        const deleteProduct = await productModel.findByIdAndDelete(productId)
        res.status(200).json({success : true, message : 'Product deleted successfully' , data : deleteProduct})
    } catch (error) {
        next(error)
    }
}

module.exports = deleteProduct