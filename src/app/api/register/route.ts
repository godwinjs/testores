import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import User from "@/app/db/models/User";
import connect from "@/app/db/utils/connect";
import { isPasswordValid } from "@/app/assets/utils/calc";

export const POST = async (request: any) => {
    const { fullName, email, password } = await request.json();

    // td: add password comparison later
    // td: also make the response dynamically tailored to the password issue
    if(isPasswordValid(password)){
        return new NextResponse( `password must contain atleast 1 uppercase, lowercase, must be 8characters long and contain 1 special character`, {status: 500})
    }
    
    await connect();
    
    const hashedPassword = await bcrypt.hash(password, 5);
    // const existingUser: any = 
    const existingUser: any = await User.findOne({email: email}); ///^fluff/ -> that begins with "fluff" and returns the result

    if(!(existingUser === null)){
        return new NextResponse(`User with email: ${email} already exist.`, {status: 400})
    }

    const newUser = new User({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        authProvider: 'local',
        // dob: '',
        // address: '',
        // phone: '',
        // gender: '',
        // roles: '',
        // about: '',
    })
 
    try {
        // console.log([fullName, email, hashedPassword])
        await newUser.save();
        return new NextResponse("User registered", {status: 200})
    } catch (err: any) {
        return new NextResponse(err, {status: 500})
    }
}

// async function loginUser(email, password) {
//     const user = await User.findOne({ email });
//     if (!user) {
//       throw new Error('User not found');
//     }
    
//     if (user.authProvider !== 'local') {
//       throw new Error(`Please login with ${user.authProvider}`);
//     }
    
//     if (!user.password) {
//       throw new Error('Password not set for this account');
//     }
    
//     const isMatch = await user.comparePassword(password, user.password);
//     if (!isMatch) {
//       throw new Error('Invalid credentials');
//     }
    
//     return user;
//   }