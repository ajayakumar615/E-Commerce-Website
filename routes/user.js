var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers');
const userHelpers = require('../helpers/user-helpers')
router.get('/', function (req, res, next) {
    productHelpers.getAllProducts().then((products) => {
        console.log(products);
        res.render('user/view-products', { products })
    })
});
router.get('/login', (req, res) => {
    res.render('user/login')
})
router.get('/signup', (req, res) => {
    res.render('user/signup')
})
router.post('/signup', async (req, res) => {
  try {
    const data = await userHelpers.doSignup(req.body);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;