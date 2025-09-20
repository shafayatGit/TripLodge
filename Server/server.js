const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.get("/", (req,res)=>res.send("Trip Lodge Is Running"))
app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))
