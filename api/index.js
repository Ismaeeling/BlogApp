const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnitfiedTopology: true, 
    useCreateIndex: true,
}).then(console.log("DB connected")).catch(err=>console.log(err));


app.use("/a", (req,res)=>{
    console.log("hala bik hala")
});

app.listen("5000", () => {
    console.log("Backend is ready");
});