const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
    {
      image: {
        type:String,
        required:true,
      },
       model: {
        type:String,
        required:true,
       },
       mileage: {
        type: Number,
        required: true,
      },
       kmTravelled:{
        type:Number,
        required:true
       },
       scratches:{
        type:Number,
        required:true
       },
       originalPaint:{
        type:String,
        required:true,
       },
       accidentCount:{
        type:Number,
        required:true
       },
       previousBuyer:{
        type:Number,
        required:true
       },
       registrationPlace:{
        type:String,
        required:true
       } 
    },
    {
      versionKey: false,
    }
);

const inventoryModel = mongoose.model("Inventory",inventorySchema )

exports.module = {inventoryModel}