var express = require('express');
var router = express.Router();
const customer = require('../models/customerModel');
/* GET home page. */
router.get('/', function (req, res, next) {
  customer.findAll((err, data) => {
    if (err) throw err
    res.render('customer/index', { customers: data })
  })
});

router.get('/create', (req, res, next) => {
  res.render('customer/create')
})

router.post('/create', (req, res, next) => {
  const { name, email, phone } = req.body

  customer.create({ name, email, phone }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Đã xảy ra lỗi khi tạo khách hàng.' });
    }
    else {
      return res.redirect('http://localhost:3000/customer')
    }

  })
})

router.post('/delete/:id', (req, res, next) => {
  const params = req.params;

  customer.deleteById(params.id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Xay ra loi" });
    } else {
      return res.status(200).json({message:"Oke"});
    }
  })
    
})


module.exports = router;
