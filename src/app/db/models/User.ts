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
        },
        dob: {
            type: String,
            unique: false,
            required: false
        },
        address: {
            type: String,
            unique: false,
            required: false
        },
        phone: {
            type: String,
            unique: true,
            required: false
        },
        gender: {
            type: String,
            unique: false,
            required: false
        },
        userType: {
            type: String,
            unique: false,
            required: false
        },
        about: {
            type: String,
            unique: false,
            required: false
        }

    },
    { timestamps: true }
)

userSchema.methods.speak = function speak() {
    const greeting = this.fullName
      ? 'Hello name is ' + this.fullName
      : 'I don\'t have a name';
    console.log(greeting);
  };

export default mongoose.models.User || mongoose.model("User", userSchema);