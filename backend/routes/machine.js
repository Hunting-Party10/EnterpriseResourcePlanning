//Author - Atharva Joshi

//Import Statements to load the models
const router = require('express').Router();
let Machine = require('../models/machine.model');

//To access any route localhost:PORT/route...
//Note Make sure JSON response contains the same variable name
//eg for add process , variable `process_name` of the request
//should contain the the process name, any other variable will
//throw an error

//Adding a route to view all Machines
router.route('/viewAll').get((req,res) => {
    Machine.find()
    .then(machine => res.json(machine))
    .catch(err => res.status(400).json('Error:' + err));
});

//Adding a route to add a Machine
router.route('/addMachine').post((req,res) => {
    const m_name = req.body.m_name;
    const m_image_location = req.body.m_image_location;
    const m_status = req.body.m_status
    const m_operator = req.body.m_operator;
    const m_purchase_date = req.body.m_purchase_date;
    const m_maintainence = req.body.m_maintainence;
    const m_consumable = req.body.m_consumable;
    const m_cost = req.body.m_cost;
    const username_created = req.body.username_created;
    const username_updated = req.body.username_updated;
    const newMachine = new Machine({m_name,m_image_location,m_status,m_operator,m_purchase_date,
    m_maintainence,m_consumable,m_cost,username_created,username_updated});
    newMachine.save()
    .then(() => res.json('Machine Added'))
    .catch(err => res.status(400).json('Unable to add Machine ' + err));
})

//Adding route to search by ID
router.route('/:id').get((req,res) =>{
    Machine.findById(req.params.id)
    .then(machine => res.json(machine))
    .catch(err => res.status(401).json('Invalid Id ' + err));
});


//Adding route to update by ID
router.route('/update/:id').post((req,res) =>{
    Machine.findById(req.params.id)
    .then(machine => {
        machine.m_name = req.body.m_name;
        machine.m_image_location = req.body.m_image_location;
        machine.m_status = req.body.m_status
        machine.m_operator = req.body.m_operator;
        machine.m_purchase_date = req.body.m_purchase_date;
        machine.m_maintainence = req.body.m_maintainence;
        machine.m_consumable = req.body.m_consumable;
        machine.m_cost = req.body.m_cost;
        machine.username_created = req.body.username_created;
        machine.username_updated = req.body.username_updated;
        machine.save()
        .then(() => res.json('Machine updated!'))
        .catch(err => res.status(400).json('Error: Unable to save updated Machine Details ' + err));
    })
    .catch(err => res.status(401).json('Invalid Id ' + err));
});

//Adding a route to delete by ID
router.route('/delete/:id').delete((req,res) => {
    Machine.findByIdAndDelete(req.params.id)
    .then(() => res.json("Machine Deleted"))
    .catch(err => res.status(400).json('Machine Id/ Deletion failed ' + err));
})

//Necessary export statement, do not change
module.exports = router;