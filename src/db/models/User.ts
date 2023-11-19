import mongoose from "mongoose";

const { Schema } = mongoose; 

const userSchema = new Schema(
    {   
        fullName: {
            type: String,
            unique: false,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            unique: true,
            required: false
        }
    },
    { timestamps: true }
)

export default mongoose.models.User || mongoose.model("User", userSchema);