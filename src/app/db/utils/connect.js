import mongoose from "mongoose";
// const cloudinary = require('cloudinary');



const connect = async () => { 
    if(mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoose connection establised") 
    } catch(error) {
        throw new Error("Error Connection to mongoose")
    }

    // try {
    //     await cloudinary.v2.config({
    //         cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    //         api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    //         api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    //         upload_preset: NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    //         secure: true,
    //       });
    //       console.log("cloudinary connection establised") 
    // }catch(err){
    //     throw new Error("Error Connection to cloudinary")
    // }
}

export default connect;