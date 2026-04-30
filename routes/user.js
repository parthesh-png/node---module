
const express = require ('express');
const userController = require('../controller/user')

const router = express.Router();



//Create Post / products

router                            //we can write "server" too for running

.post('/', userController. createUser)

//read get product
.get('/',userController. getAllUsers)

//read get product / id;
.get('/:id',userController. getUsers)

//update PUT product / id; 
.put('/:id',userController. replaceUsers) 

//Update PATCH product / id;
.patch('/:id',userController. updateUsers)

//Delete /products/"id"
.delete('/:id',userController. deleteUsers);

exports.router = router;
