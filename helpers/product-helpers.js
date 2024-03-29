var db = require('../config/connection')
var collection = require('../config/collections')
module.exports = {
    addProduct: function(product, callback) {
        db.get().collection("product").insertOne(product).then((data) => {
          console.log(data);
          callback(data.insertedId);
        });
  
    },
    getAllProducts:(callback)=>{
      return new Promise(async(resolve,reject)=>{
        let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
        resolve(products)
      })
    }
};