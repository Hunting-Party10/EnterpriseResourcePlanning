//Author - Megh Khaire
//Import Statements to load the models
const router = require('express').Router();
let Item = require('../models/items.model');

//To access any route localhost:PORT/route...
//Note Make sure JSON response contains the same variable name
//eg for add process , variable `process_name` of the request
//should contain the the process name, any other variable will
//throw an error
//Adding a route to view all Items
router.route('/viewAll').get((req,res) => {
    Item.find()
    .then(item => res.json(item))
    .catch(err => res.status(500).json('Error:' + err));
});

//Adding a route to add an Item
router.route('/addItems').post((req,res) => {
    const newItem = new Item(req.body)
    newItem.save()
    .then(() => res.json('Item Added'))
    .catch(err => res.status(400).json('Unable to add Item' + err));
});

//Adding a route to find by ID
router.route('/:id').get((req,res) =>{
    Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json('Invalid Id ' + err));
});

//Adding a route to delete by ID
router.route('/delete/:id').delete((req,res) => {
    Item.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(404).json('Invalid Item Id/ Deletion failed ' + err));
});

//Adding a route to update by ID
router.route('/update/:id').patch((req,res) =>{
    try{
        Item.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})
        .then(item => {
            if(!item){
                res.status(404).json('Invalid Id!')
            }
            res.json('Customer updated!')
        })
    }
    catch(e){
        res.status(400).json(e+err)
    }
});

//Export statement, Do not change
module.exports = router;