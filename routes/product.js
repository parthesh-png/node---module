
const express = require ('express');
const productController = require('../controller/product')  //file contain logic 

const router = express.Router();



//Create Post / products

router                            //we can write "server" too for running

.post('/', productController.createProduct)

//read get product
.get('/',productController. getAllProducts)

//read get product / id;
.get('/:id',productController. getProduct)

//update PUT product / id;
.put('/:id',productController. replaceProduct) 

//Update PATCH product / id;
.patch('/:id',productController. updateProduct)

//Delete /products/"id"
.delete('/:id',productController. deleteProducts);

exports.router = router;
