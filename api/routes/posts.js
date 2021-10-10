const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE
router.post("/", async (req, res)=>{
    const newPost = await Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;