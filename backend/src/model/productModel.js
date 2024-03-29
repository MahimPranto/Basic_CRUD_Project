const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    productName : {
        type : String,
        required : true,
        trim : true
    },
    productPrice : {
        type : String,
        required : true,
        trim : true
    },
    productImage : {
        type : String,
        required : true,
        trim : true
    },
}, { timestamps : true, versionKey : false})

const productModel = model('Product', productSchema)

module.exports = productModel