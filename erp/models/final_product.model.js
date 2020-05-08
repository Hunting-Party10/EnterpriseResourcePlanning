//Author - Atharva Joshi

//Describes model for the Final Product
//fp_name : Name of final product
//description : Description of product
//items : List of items for the product
//          item_id : objid of the item
//          process_list_overide : If false use the default process list of the item
//                                 if true use the custom list present in the final product
//                                 any change  in the process list will change this variable to true
//username_created : Record user who created the process
//username_updated : Record user who updated the process
//timestamps : record time of creation and updation

//Required import, Do not change
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const final_productSchema = new Schema({
    fp_name : {
        type: String,
        trim:true,
        required: [true,'Final Product name must be specified!!']
    },
    fp_id :{
        type: String,
        trim:true,
        unique: true,
        required: [true, 'Final Product ID must be specified!']
    },
    description: String,
    items : [{
        item_id : {
            type: String,
            trim:true,
            required: true
        },
        process_list_overide: {
            type: Boolean,
            required: true
        },
        status : String,
        process_list : [String]
    }],
    username_created :{
        type: String,
        ref: 'Employee'
    },
    username_updated: {
        type: String,
        ref: 'Employee'
    }
},{
    timestamps: true
})


const FinalProduct = mongoose.model('FinalProduct', final_productSchema);
module.exports = FinalProduct