import mongoose from "mongoose";

const connectToMongo = async () => {
    const res = await mongoose.connect("mongodb://localhost:27017/gallery-app");
    if (res)
    {
        console.log("connected");
    }  
};
export default connectToMongo;


