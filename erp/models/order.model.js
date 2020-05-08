//Author - Atharva Joshi

//Describes an order made by a customer
//po_number : Purchase order number for the product
//po_path : Path of the Purchase order pdf in the file system
//so_number : Sales order number for the product
//so_path : Path of the Sales order pdf in the file system
//fp_list : List of final products for the order
//fp_cost : List of List of cost of individual product part of BOM(Bill of materials)
//item_list : List of Ala-carte items for the order
//item_cost : List of Cost of Ala-carte items for the order
//tax_mapping : Type of tax applied to the bill
//username_created : Record user who created the process
//username_updated : Record user who updated the process
//timestamps : record time of creation and updation

//Required import, Do not change
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

orderSchema = new Schema({
    customer_id: {
        type: String,
        unique: true,
        required: [true,'Customer Id must be specified!']
    },
    po_number :{
        type : String,
        trim:true,
        required: [true,'Order number must be specified!']
    },
    po_path: {
        type:String,
        trim:true
    },
    so_number : {
        type:String,
        trim:true
    },
    so_path: {
        type:String,
        trim:true
    },
    invoice_type : String,
    transporter : {
        t_name: {
            type:String,
            trim:true
        },
        t_number : Number
    },
    fp_list : [String],
    fp_cost : [{
        bom_item: [String],
        item_cost : [Number]
    }],
    item_list : [String],
    item_cost : [Number],
    tax_mapping :{
        type: String,
        enum:['CGST','IGST','SGST']
    },
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

//Necesarry Export statement, Do not Change
const Order = mongoose.model('Order',orderSchema)
module.exports = Order