import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
const PORT = process.env.PORT || 3000;
import { clerkMiddleware } from '@clerk/express'

connectDB()
const app = express();
app.use(cors());

// middleWares
app.use(clerkMiddleware());
app.use(express.json());


app.get("/",(req,res)=>res.send("TripLodge Running"))
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
