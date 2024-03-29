const createProduct = require('./controller/createProduct')
const deleteProduct = require('./controller/deleteProduct')
const readProduct = require('./controller/readProduct')
const readSingleProduct = require('./controller/readSingleProduct')
const updateProduct = require('./controller/updateProduct')

const router = require('express').Router()


router.post('/create', createProduct)
router.get('/', readProduct)
router.get('/:productId', readSingleProduct)
router.put('/update/:productId', updateProduct)
router.delete('/delete/:productId', deleteProduct)




module.exports = router