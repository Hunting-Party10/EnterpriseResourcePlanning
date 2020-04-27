//Describes model for the items/components

//item_name : Name of item eq angled bar
//description : Optional explaination
//drawing_number : identification for drawings
//drawing_location : location of file in fs
//process_list : list of processes
//              process_id : Objid of process
//              scheduled_date : Date when process is scheduled
//              instructions: Any specific instructions to worker
//attached_material : Any material required for the item
//               material_id : Objid of material
//               quantity : Quantity assigned 
//username_created : Record user who created the process
//username_updated : Record user who updated the process

//Required import, Do not change
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Schema Definition
const itemSchema = new Schema({
    item_name:{
        type: String,
        required: true,
        trim:true
    },
    description: String,
    drawing_number:{
        type: String,
        required: true,
        trim:true
    },
    drawing_location: {
        type:String,
        trim:true
    },
    drawing_revision_number:{
        type:Number,
        default:0
    },
    process_list: [{
        process_id: {
            type: String,
            required: true,
            trim:true
        },
        scheduled_date: Date,
        instructions: String
    }],
    attached_materials: [{
        material_id : {
            type: String,
            trim:true
        },
        quantity : Number
    }],
    username_created : String,
    username_updated: String
},{
    timestamps:true,
});


//Necesarry Export statement, Do not Change
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
