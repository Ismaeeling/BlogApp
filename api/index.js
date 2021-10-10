const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();
app.use(express.json());

const URL = process.env.MONOGO_URL;

mongoose.connect(URL)
.then(console.log("DB connected")).catch(err=>console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen("5000", () => {
    console.log("Backend is ready");
});