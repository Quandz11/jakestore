var express = require('express');
const ToyModel = require('../models/ToyModel');
const Toy2Model = require('../models/Toy2Model');
const Toy3Model = require('../models/Toy3Model');
var router = express.Router();

router.get('/', async (req, res) => {
    var toys = await ToyModel.find();
    var toy2 = await Toy2Model.find();
    var toy3 = await Toy3Model.find();
    res.render('index', {toys : toys ,toy2 :toy2, toy3 : toy3})
})

router.get('/admin',async (req, res) => {
   var toys = await ToyModel.find();
   var toy2 = await Toy2Model.find();
   var toy3 = await Toy3Model.find();
   res.render('admin', {toys : toys ,toy2 :toy2, toy3 : toy3, layout : false})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var toys = await ToyModel.findById(id);
    res.render('toy/detail', { toys: toys });
 })
 router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   var toy2 = await Toy2Model.findById(id);
   res.render('toy2/detail', { toy2: toy2 });
})


 router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    //relative search
    var toys = await ToyModel.find({ name: new RegExp(keyword, "i") });
    res.render('toy/index', { toys: toys });
 })
 router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   //relative search
   var toy2 = await Toy2Model.find({ name: new RegExp(keyword, "i") });
   res.render('toy2/index', { toy2: toy2 });
})
router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   //relative search
   var toy3 = await Toy3Model.find({ name: new RegExp(keyword, "i") });
   res.render('toy3/index', { toy3: toy3});
})
 
module.exports = router;
