import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import User from "@/db/models/User";
import connect from "@/db/utils/connect";

export const POST = async (request: any) => {
    const { fullName, email, password } = await request.json();

    // console.log([fullName, email, password ])
    
    await connect();
    
    const hashedPassword = await bcrypt.hash(password, 5);
    // const existingUser: any = 
    const existingUser: any = await User.findOne({email: email});

    console.log(!(existingUser === null))
    if(!(existingUser === null)){
        return new NextResponse(`User with email: ${email} already exist.`, {status: 400})
    }

    const newUser = new User({
        fullName: fullName,
        email: email,
        password: hashedPassword
    })

    try {
        console.log([fullName, email, hashedPassword])
        await newUser.save();
        return new NextResponse("User registered", {status: 200})
    } catch (err: any) {
        return new NextResponse(err, {status: 500})
    }
}