const dotenv= require("dotenv");
dotenv.config();
const cors= require("cors");
const express = require("express");
const app = express();
const connectToDb=require("./db/db");
const userRoutes=require("./routes/user.route");

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=> {
    res.send("hello world");
})

app.use('/users',userRoutes);




module.exports = app;