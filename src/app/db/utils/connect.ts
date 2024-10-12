import mongoose from "mongoose";
// const cloudinary = require('cloudinary');

const connect = async () => { 
    mongoose.set('debug', true);

    if(mongoose.connections[0].readyState) return;
    const MONGO_URL: string = process.env.MONGO_URL || "";

    if (!MONGO_URL || MONGO_URL === "") {
        throw new Error('Please define the MONGODB_URI environment variable');
      }

    try {
        await mongoose.connect(MONGO_URL)
        console.log("mongoose connection establised") 
        return true;
    } catch(error) {
        throw new Error("Error Connecting to mongoose db")
    }

    // try {
    //     await cloudinary.v2.config({
    //         cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    //         api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    //         api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    //         upload_preset: NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET2,
    //         secure: true,
    //       });
    //       console.log("cloudinary connection establised") 
    // }catch(err){
    //     throw new Error("Error Connection to cloudinary")
    // }
}

export default connect;