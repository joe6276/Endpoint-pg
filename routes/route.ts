import express from'express'
import { createProduct,deleteProduct,getProduct,getProductByid, updateProduct} from '../controller/productController'

const router= express.Router()

router.post('/',createProduct)
router.get('/', getProduct)
router.get('/:id', getProductByid)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export default router