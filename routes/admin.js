var express = require('express');
const { render } = require('../app');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper = require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function (req, res, next) {
    productHelpers.getAllProducts().then((products) => {
        console.log(products);
        res.render('admin/view-products', { admin: true, products })
    })
});
router.get('/add-products', function (req, res) {
    res.render('admin/add-products')
})
router.post("/add-product", (req, res) => {
    console.log(req.body);
    console.log(req.files.Image);
    productHelpers.addProduct(req.body, (insertedId) => {
        let image = req.files.Image;
        image.mv("./public/product-images/" + insertedId + ".jpg", (err, done) => {
            if (!err) {
                res.render("admin/add-products");
            }
        });
    });
})
module.exports = router;
