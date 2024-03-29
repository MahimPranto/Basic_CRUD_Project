const productModel = require("../model/productModel")

const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId
        const productData= req.body
        const updatedProduct = await productModel.findByIdAndUpdate(productId, productData, {new : true})
        res.status(200).json({success : true, message : 'Product Updated Successfully', data : updatedProduct})

    } catch (error) {
        next(error)
    }
}

module.exports = updateProduct