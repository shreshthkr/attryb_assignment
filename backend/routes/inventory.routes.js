const express = require("express");
const inventoryRouter = express.Router();
const { inventoryModel } = require("../models/inventory.model");
// const cloudinary = require('cloudinary').v2;
// const fileUpload = require('express-fileupload');

// cloudinary.config({ 
//     cloud_name: 'dbt1pdrlj', 
//     api_key: '559994769546896', 
//     api_secret: 'MAVkg8wxCtAoYhpvRwfkkIrmVkM'
// });


// inventoryRouter.use(fileUpload());
/*
inventoryRouter.post("/addInventory", async (req, res) => {
    try {
        if (!req.files || !req.files.image) {
            return res.status(400).send({ msg: "No image file uploaded" });
        }

        const file = req.files.image;
        const result = await cloudinary.uploader.upload(file.tempFilePath);

        if (!result || !result.url) {
            return res.status(500).send({ msg: "Failed to upload image to Cloudinary" });
        }

        const allInventory = new inventoryModel({
            model: req.body.model,
            mileage: req.body.mileage,
            price: req.body.price,
            km_odeometer: req.body.km_odeometer,
            scratches: req.body.scratches,
            originalPaint: req.body.originalPaint,
            accidentCount: req.body.accidentCount,
            previousBuyer: req.body.previousBuyer,
            registrationPlace: req.body.registrationPlace,
            image: result.url,
            description: req.body.description
        });

        await allInventory.save();
        res.status(200).send({ msg: "Inventory Added", allInventory });
    } catch (error) {
        console.error(error);
        res.status(400).send({ msg: error.message });
    }
});
*/

inventoryRouter.post("/add", async (req,res)=>{
    const newInventory = new inventoryModel(req.body);
    try {
        const inventory = await newInventory.save();
        res.status(200).send(inventory);
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
})

inventoryRouter.get("/", async (req, res) => {
    try {
        const category = req.query.category
        console.log(category)
        if (category) {
             const cars = await inventoryModel.find({ category: category });

             res.status(200).send(cars);
        }
       

        const cars = await inventoryModel.find();
        res.status(200).send(cars);
   }

   catch (err) {
    res.status(400).send({ "msg": err.message })
   }
});

module.exports = { inventoryRouter };


