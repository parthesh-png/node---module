 
//  validated schema 
 const mongoose = require('mongoose');
 const { Schema } =mongoose;


const productSchema = new Schema({
 title: {type:String,required:true},  // String  shortcut {type: String}
      description: String,
      price:{type:Number,min:[0,'wrong price'],required: true},
      discountPercentage: {type:Number,min:[0,'wrong min discount'], max:[50,'wrong max discount']},
      rating: {type: Number,min:[0,'wrong rating'],max:[5,'wrong max rating'],default:0},
      brand: {type:String,required:true},
      category:{type:String,required:true},

      thumbnail:{type:String,required:true},
      images : [String]

});

  //create a Model from the Schema because only the Model can perform database operations like:
exports.Product = mongoose.model('Product',productSchema);    //product is collection name that will create automatically after plural




// *********NORMAL SCHEMA ***************//


//  const mongoose = require('mongoose');
//  const { Schema } =mongoose;


// const productSchema = new Schema({
//    title: String,  // String  shortcut {type: String}
//       description: String,
//       category: String,
//       price:Number,
//       discountPercentage: Number,
//       rating: Number,
//       brand: String,
//       images : [String]

// });


// exports.Product = mongoose.model('Product',productSchema);