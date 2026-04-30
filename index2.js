
require('dotenv').config()

const express = require('express');
const path = require('path');
 const morgan=require('morgan')  //third party middlewar
 const mongoose = require('mongoose');
 const cors = require('cors')
 



const server = express();

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
console.log('env',process.env.DB_PASSWORD);

//db connection  after middleware if important


main().catch(err => console.log(err));

async function main() {
 // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerse'); // ecommerce is writt.enas name to connact that with local db

 //for atlas
 await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')

 
}




// const productRouter=express.Router();

//body parser (middle ware)
server.use(cors())
server.use(express.json())
server.use(morgan('default'))
//express.static only auto-loads:index.html;
 server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR))); //at 8080 ,it tell run public file 
server.use('/products',productRouter.router);  //middle ware for attaching router and server

server.use('/users',userRouter.router)


//catch-all-route - any route render this , must be in last 
server.use((req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))  //Sends a file to browser
})

console.log('env',process.env.DB_PASSWORD)



//MVC 
 
// //Create Post / products0c

// productRouter                            //we can write "server" too for running

// .post('/products', productController. createProduct)

// //read get product
// .get('/products',productController. getAllProducts)

// //read get product / id;
// .get('/products/:id',productController. getProduct)

// //update PUT product / id;
// .put('/products/:id',productController. replaceProduct) 

// //Update PATCH product / id;
// .patch('/products/:id',productController. updateProduct)

// //Delete /products/"id"
// .delete('/products/:id',productController. deleteProducts);
 
server.get('/',(req,res)=>{
    //res.send('hello')  //for html hello in LH
    //res.sendFile('C:\Users\parth\OneDrive\Desktop\node js\index3.html') //for showing file
     //res.json(products)  //for showing data in file
    // res.sendStatus(404)
    res.sendFile(path.join(__dirname, 'index3.html'))  //dieName give directory name and then path both join 
    //res.sendFile--It sends a file from your server to the browser
})


server.listen(process.env.PORT,()=>{
    console.log('server started')
})
 










  














/* creaing Rest API  & CRUD api */


// const fs = require('fs')

// const index = fs.readFileSync('index3.html','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products
// const express = require('express');
// const morgan=require('morgan')  //third party middlewar
// const server = express();

// //body parser
// server.use(express.json())
//   server.use(morgan('default'))
// server.use(express.static('public'));




  


// //API Route,base url , google.com/ 

//  //create post / products -adding products data in json file

// server.post('/products',(req,res)=>{

//     console.log(req.body)  //it recieve data from body and show in terminal
//     products.push(req.body)
//    res.status(201).res.json(req.body)
// });




// //read get product

// server.get('/products',(req,res) => {
    
//     res.json(products) 
// })


// //read get product / id;
// server.get('/products/:id',(req,res) => {
//     const id =+req.params.id;
//      const product = products.find(p=>p.id===id); //find always method take parameter for searching basis
//      res.json(product) 
//     //  res.status(201).json(req.body); //201 is code of crearted

// })

// //update PUT product / id;
// server.put('/products/:id',(req,res) => {
//     const id =+req.params.id;
//      const productIndex = products.findIndex(p=>p.id===id);
//      products.splice(productIndex,1,{...req.body,id:id})
//      res.status(201).json();

// }) 

// //Update PATCH product / id;
// server.patch('/products/:id',(req,res) =>{
//     const id =+req.params.id
//     const productIndex = products.findIndex(p => p.id === id)

//     const product = products[productIndex]; //- for old product
//     products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json();
// })



// //Delete /products/"id"
// server.delete('/products/:id',(req,res) => {
//     const id =+req.params.id;
//      const productIndex = products.findIndex(p=>p.id===id);

//       const product = products[productIndex];
//      products.splice(productIndex,1)
//      res.status(201).json(product);

// }) 



//  /*****************   no use    */


// // server.delete('/',(req,res)=>{
// //     res.json({type:'DELETE'})
// // })
// // server.patch('/',(req,res)=>{
// //     res.json({type:'PATCH'})   //use google postman
// // })

// /**************************************** */


// server.get('/',(req,res)=>{
//     // res.send('hello')  //for html hello in LH
//     // res.sendFile('C:\Users\parth\OneDrive\Desktop\node js\index3.html') //for showing file
//     // res.json(products)  //for showing data in file
//     // res.sendStatus(404)
// })


// server.listen(8080,()=>{
//     console.log('server started')
// })
 
 



















 /* creaing server in using express */


// const fs = require('fs')

// const index = fs.readFileSync('index3.html','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products

// const morgan=require('morgan')  //third party middleware
// const express = require('express');





// const server = express();


// //middleware 
//   //bodyParser
//   server.use(morgan('dev'))
// server.use(express.static('public'));



// //  server.use((req,res,next)=>{
// //      //using req method 
// //  console.log(req.method,
// //     req.ip,req.hostname,
// //     new Date(),req.
// //     get('User-Agent'))

// //  next()   //it target to go forward or go next middleware
// //  })



// //  //static hosting 
// //  server.use(express.static('public'));


// server.use(express.json())
// const auth =(req,res,next)=>{

//     // console.log(req.query)


//     // if(req.query.password=='123'){ 
// //                                   //in browser we can sent anything after "?" we call it 'query'

// //     if(req.body.password=='123'){      //converted from req.query
// //       next()
// //     }else{

// //         res.sendStatus(401) //unauthorize mean 401
// //     }


// next();
// }

  


// //API -ENDpoint -Route
// server.get('/product/:id',auth,(req,res) => {
//     console.log(req.params)
//     res.json({type:'GET'}) 

// })
// server.post('/',auth,(req,res)=>{
//     res.json({type:'POST'})
// })
// server.put('/',(req,res)=>{
//     res.json({type:'PUT'})
// })

// server.delete('/',(req,res)=>{
//     res.json({type:'DELETE'})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'})   //use google postman
// })



// server.get('/',(req,res)=>{
//     // res.send('hello')  //for html hello in LH
//     // res.sendFile('C:\Users\parth\OneDrive\Desktop\node js\index3.html') //for showing file
//     // res.json(products)  //for showing data in file
//     // res.sendStatus(404)
// })







// server.listen(8080,()=>{
//     console.log('server started')
// })
 
























 










 /**** creaing server in using node*********/

// const http = require('http')

// const fs = require('fs')
// const index = fs.readFileSync('index3.html','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products

// const server= http.createServer((req,res)=>{

//   console.log(req.url,req.method);

//   if(req.url.startsWith('/product')){
//     //  console.log(req.url.split('/'))
//        const id = req.url.split('/')[2]
//        const product = products.find(p=>p.id===(+id))
//       console.log(product)
  
// //    case'/product':
//                res.setHeader('Content-Type','text/html')  

//               let modifiedIndex = index.replace('**Title**', product.title)
//               .replace('**url**',product.thumbnail)
//               .replace('**price**',product.price)
//               .replace('**rating**',product.rating)
//                res.end(modifiedIndex) 
//                return //for ending the server and its work after this server will not work 
//               //  break;  
              
//   } 


//    switch(req.url){
//     case'/':
//                  res.setHeader('Content-Type','text/html')
//                  res.end(index);
//                  break;
//     case'/api':             
//                res.setHeader('Content-Type','application/json')       //it tell which file is given and act like that
//                res.end(JSON.stringify(data))
//                break;
     

//      default: 
//          res.writeHead(404,'nt found')
//          res.end();         
//    }





//     console.log('server started')
//     // res.setHeader('Dummy','dummy value')

//     // res.end('<h1> hello</h1>')\
     
      
//     // res.end(JSON.stringify(data)) //converting it into string
    
// })

// server.listen(8080)  //listin bind it with por