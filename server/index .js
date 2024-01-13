import express from "express";
import connectToMongo from "./config/db.js";

const app = express();
const PORT = 8000;

connectToMongo();

app.listen(PORT,()=>{
    console.log("Server listening on PORT", PORT);
})

 