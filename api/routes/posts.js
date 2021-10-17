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

//Update
router.put("/:id", async (req,res)=>{
    const updatePost = await Post.findById(req.params.id);
    if(req.body.username === updatePost.username){
        try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json(updatedPost);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You can only update your Post");
    }
});

//Delete
router.delete("/:id", async (req, res)=>{
    const deletePost = await Post.findById(req.params.id);
    if(req.body.username === deletePost.username){
        try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post Deleted");
    }catch(err){
        res.status(500).json(err);
    }
    }else{
        res.status(401).json("You can't delete this post");
    }
});

//Get
router.get("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

//Get all Posts
router.get("/", async(req,res)=>{
    const username =  req.query.username;
    const cat =  req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username});
        }else if (cat){
            posts = await Post.find({categories:{
                $in:[cat],
            },
        });
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;