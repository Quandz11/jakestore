var express = require('express');
const Toy2Model = require('../models/Toy2Model');
var router = express.Router();

router.get('/', async (req, res) => {
    var toy2 = await Toy2Model.find();
    res.render('toy2/index', {toy2 :toy2})
})

router.get('/adminindex', async (req, res)=> {
   var toy2 = await Toy2Model.find();
   res.render('toy2/adminindex', {toy2 :toy2, layout : false})
})

router.get('/detail/:id', async (req, res) => {
    var id = req.params.id;
    var toy2 = await Toy2Model.findById(id);
    res.render('toy2/detail', { toy2: toy2 });
 })

 router.get('/add', (req, res) => {
    res.render('toy2/add');
 })

 
 router.post('/add', async (req, res) => {
    var toy2 = req.body;
    await Toy2Model.create(toy2);
    res.redirect('/toy2');
 })

 router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy2 = await Toy2Model.findById(id);
    res.render('toy2/edit', { toy2: toy2 })
 })
 
 router.post('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var toy2 = req.body;
    await Toy2Model.findByIdAndUpdate(id, toy2);
    console.log('Update Toy succeed !');
    res.redirect('/toy2');
 })

 router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await Toy2Model.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/toy2');
})
 router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    //relative search
    var toy2 = await Toy2Model.find({ name: new RegExp(keyword, "i") });
    res.render('toy2/index', { toy2: toy2 });
 })
 

module.exports = router;
