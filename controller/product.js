
const fs = require('fs')
const model = require('../model/product')
const Product = model.Product;
 const mongoose = require('mongoose');

// const index = fs.readFileSync('index3.html','utf-8')

//no need after moongse
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products




//create

exports.createProduct = async (req, res) => {
  try {
const product = new Product(req.body);   //req,body when data coming from postman froentend etc
     // <-- async/await ONLY

//this is hard coding run when req.body isnt given in product
              // product.title= 'Phonexxxxx'
              // product.price = 99999;
              // product.rating= 5
              // console.log('Product before save:', product);
 
const saved = await product.save();   //this save data in database , save is async oper

    res.status(201).json(saved);
      console.log('Saved product in DB:', saved); 
    

  } catch (err) {
    console.error('Error:', err); //it show all the requred error 
    res.status(400).json({ err });  
    
  }
 
};



//for
  
exports. getAllProducts = async(req,res) => {

  const products =  await Product.find() //for mongoose  it show all db 


// for conditional - view
        // const products =  await Product.find({price : {$gt:500}})  //it shows only whiose proce is 500 greater 

    
    res.json(products) 
}


//******************************************* */



// for getiing data by normal json get product
    // exports. getProduct =(req,res) => {
    //     const id =+req.params.id;
    //      const product = products.find(p=>p.id===id); //find always method take parameter for searching basis
    //      res.json(product) 
      

    // }


//for mongoose get product
exports. getProduct = async(req,res) => {
        const id =req.params.id; //remive + for remove no conversion we want string
        
        const products =  await Product.findById(id)  
         res.json(products) 
      

    }



//************************************************** */




//for moongse
    exports.replaceProduct=async(req,res) => {
        const id =req.params.id;

        try {
          const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})  //findOneAndReplace(filter, replacement)
//     { new: true } tells Mongoose: “Give me the UPDATED document, not the old one”
             res.status(201).json(doc);

        }
        catch(err){
          console.log(err)
            res.status(400).json(err);
        }
       
     

    }



//for normal json 
    // exports. replaceProduct=(req,res) => {
    //     const id =+req.params.id;
    //     const productIndex = products.findIndex(p=>p.id===id);
    //     products.splice(productIndex,1,{...req.body,id:id}) //id will same only add req.body with id so we use spread operator 
    //     res.status(201).json();

    // }





// ************************************






//for moong  (patch)

exports. updateProduct =async(req,res) =>{
    const id =req.params.id
      try {
          const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})  //findOneAndReplace(filter, replacement)

             res.status(201).json(doc);

        }
        catch(err){
          console.log(err)
            res.status(400).json(err);
        }
       

}



// fpr json 

// exports. updateProduct =(req,res) =>{
//     const id =+req.params.id
//     const productIndex = products.findIndex(p => p.id === id)

//     const product = products[productIndex]; //- for old product
//     products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json();

// }


// **************************




//for mongooose 
exports. deleteProducts=async(req,res) => {
    const id =req.params.id;
     try {
          const doc = await Product.findOneAndDelete({_id:id},{new:true})  //no need req,json as nothing left 

             res.status(201).json(doc);

        }
        catch(err){
          console.log(err)
            res.status(400).json(err);
        }
       
     
     res.status(201).json(product);

}
















// exports. deleteProducts=(req,res) => {
//     const id =+req.params.id;
//      const productIndex = products.findIndex(p=>p.id===id);

//       const product = products[productIndex];
//      products.splice(productIndex,1)
//      res.status(201).json(product);

// }