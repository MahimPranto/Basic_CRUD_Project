const producModel = require('../model/productModel')


const createProduct = async (req, res, next) => {
    try {
        const productData = req.body
        //validation here
        const product = await producModel.create(productData)

        res.status(201).json({sucess : true, message : 'Product created successfully', data : product})

    } catch (error) {
        next(error)
    }
}


module.exports = createProduct