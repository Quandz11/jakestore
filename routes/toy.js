var express = require('express');
const ToyModel = require('../models/ToyModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var toys = await ToyModel.find();
    res.render('toy/index', {toys : toys })
})

router.get('/adminindex', async (req, res)=> {
   var toys = await ToyModel.find();
   res.render('toy/adminindex', {toys :toys, layout : false})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var toys = await ToyModel.findById(id);
    res.render('toy/detail', { toys: toys });
 })
 router.get('../detail/:id', async (req, res) => {
   var id = req.params.id;
   var toy2 = await Toy2Model.findById(id);
   res.render('toy2/detail', { toy2: toy2 });
})

 router.get('/add', (req, res) => {
    res.render('toy/add');
 })

 
 router.post('/add', async (req, res) => {
    var toys = req.body;
    await ToyModel.create(toys);
    res.redirect('/toy');
 })

 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy = await ToyModel.findById(id);
    res.render('toy/edit', { toy: toy })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy = req.body;
    await ToyModel.findByIdAndUpdate(id, toy);
    console.log('Update Toy succeed !');
    res.redirect('/toy');
 })

 router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await ToyModel.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/toy');
})
 router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    //relative search
    var toys = await ToyModel.find({ name: new RegExp(keyword, "i") });
    res.render('toy/index', { toys: toys });
 })
 
module.exports = router;
