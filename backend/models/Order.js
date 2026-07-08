const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    items:Array,
    total:Number,
    status:{
        type:String,
        default:"Pending"
    }
},{timestamps:true});

module.exports=mongoose.model("Order",orderSchema);