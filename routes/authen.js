var express = require('express');
var AuthenModel = require('../models/Authen');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('authen/index');
 });

 router.get('/register', (req, res) => {
    res.render('authen/register');
  })
  router.post('/', async (req, res) => {
    var login = await AuthenModel.findOne(
      {
        username: req.body.username,
        password: req.body.password,
      }
    )
    //điều hướng web khi login succeed (vào trang admin) hoặc login fail (về lại trang login)
    if (login)  //login == true
      res.redirect('/admin')
    else
      res.redirect('/authen');
  })

  router.post('/register', async (req, res) => {
    var register = req.body;
    await AuthenModel.create(register);
    res.redirect('/authen');
 })



module.exports = router;
