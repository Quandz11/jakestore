var express = require('express');
const Toy3Model = require('../models/Toy3Model');
var router = express.Router();

router.get('/', async (req, res) => {
    var toy3 = await Toy3Model.find();
    res.render('toy3/index', {toy3 :toy3})
})

router.get('/adminindex', async (req, res)=> {
    var toy3 = await Toy3Model.find();
    res.render('toy3/adminindex', {toy3 :toy3, layout : false})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var toy3 = await Toy3Model.findById(id);
    res.render('toy3/detail', { toy3: toy3 });
 })

 router.get('/add', (req, res) => {
    res.render('toy3/add');
 })

 
 router.post('/add', async (req, res) => {
    var toy3 = req.body;
    await Toy3Model.create(toy3);
    res.redirect('/toy3');
 })

 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy3= await Toy3Model.findById(id);
    res.render('toy3/edit', { toy3: toy3 })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy3= req.body;
    await Toy3Model.findByIdAndUpdate(id, toy3);
    console.log('Update Toy succeed !');
    res.redirect('/toy3');
 })
 router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await Toy3Model.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/toy3');
})
 router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    //relative search
    var toy3 = await Toy3Model.find({ name: new RegExp(keyword, "i") });
    res.render('toy3/index', { toy3: toy3 });
 })
 

module.exports = router;
