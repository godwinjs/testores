import mongoose from "mongoose";

const connect = async () => { 
    if(mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL)

        console.log("mongoose connection establised") 
    } catch(error) {
        throw new Error("Error Connection to mongoose")
    }
}

export default connect;