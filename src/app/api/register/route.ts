import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import User from "@/app/db/models/User";
import connect from "@/app/db/utils/connect";

export const POST = async (request: any) => {
    const { fullName, email, password } = await request.json();
    
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
        dob: '',
        address: '',
        phone: '',
        gender: ''
    })
 
    try {
        // console.log([fullName, email, hashedPassword])
        await newUser.save();
        return new NextResponse("User registered", {status: 200})
    } catch (err: any) {
        return new NextResponse(err, {status: 500})
    }
}