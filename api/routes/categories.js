const router = require("express").Router();
const Category = require("../models/Category");

//Create 
router.post("/", async (req, res)=>{
    const newCat = await Category(req.body);
    try{
        const savedCategory = await newCat.save();
        res.status(200).json(savedCategory);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get all categories
router.get("/", async (req, res)=>{
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;