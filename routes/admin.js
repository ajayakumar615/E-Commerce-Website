var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "IPHONE 15",
      category: "Mobile Phone",
      description: "Designed by Apple in california",
      image: "https://mobilbranche.de/wp-content/uploads/2023/09/apple-iphone-15-lineup-pink-geo.jpg"
    },
    {
      name: "IPHONE 14",
      category: "Mobile Phone",
      description: "Designed by Apple in california",
      image: "https://phonebox.com.mt/wp-content/uploads/2022/10/0021392_iphone-14.jpeg"
    },
    {
      name: "IPHONE 13",
      category: "Mobile Phone",
      description: "Designed by Apple in california",
      image: "https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dw2b68f50f/images/42085684/large/42085684_x1.jpg"
    },
    {
      name: "IPHONE 12",
      category: "Mobile Phone",
      description: "Designed by Apple in california",
      image: "https://th.bing.com/th/id/OIP._gmNS0gvR7YcKTiVL5nb4gHaIt?rs=1&pid=ImgDetMain"
    },
    {
      name: "IPHONE 11",
      category: "Mobile Phone",
      description: "Designed by Apple in california",
      image: "https://tpmobile.vn/wp-content/uploads/2019/11/637037652462548298_11-trang-768x768.jpg"
    },
  ]
  res.render('admin/view-products',{admin:true,products})
});

router.get('/add-products',function(req,res){
  res.render('admin/add-products')
})
router.post('/add-products',(req,res)=>{

  productHelpers.addProduct(req.body,(insertedId)=>{
    let image = req.files.image;
    image.mv("./public/product-images/" + insertedId + ".jpg", (err, done) => {
      if (!err) {
        res.render("admin/add-products");
      }
    })  
  })
})
module.exports = router;
