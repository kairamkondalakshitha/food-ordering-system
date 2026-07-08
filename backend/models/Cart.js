const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food"
    },
    quantity:Number
},{timestamps:true});

module.exports=mongoose.model("Cart",cartSchema);