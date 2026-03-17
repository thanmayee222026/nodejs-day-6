import express from "express"; 
import dotenv from "dotenv"; 
import connectDB from "./config/db.js"; 
import productroutes1 from "./routes/productroutes1.js"; 
dotenv.config(); 
connectDB(); 
const app = express(); 
app.use(express.json()); 
app.use("/api", productroutes1); 
const PORT = process.env.PORT; 
app.listen(PORT, () => { 
console.log(`server is running on port ${PORT}`); 
})