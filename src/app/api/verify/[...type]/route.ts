import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server';

import connect from "@/app/db/utils/connect";
import User from "@/app/db/models/User";

import { updateUser, findByEmail } from "@/app/db/services/user.service";


export const POST = async (request: any, { params }: { params: { type: [string] }}) => {
    const { token } = await request.json(); 
    const route: string = params.type[0];

    await connect()

    const user = await User.findOne({ verificationToken: token})

    switch (route) {
        case "verify-email":
            try {
                if (!user) {
                    return NextResponse.json({ error: "Invalid token", data: user}, { status: 400});
                }

                await updateUser(user.email, { isVerified: true, verificationToken: undefined});

                return NextResponse.json({ success: "Email Verified", data: user}, { status: 200});
            } catch (err: any) {
                console.log(err)
                return NextResponse.json({ error: "Internal server error: save()" , data: err}, { status: 500});
            }
        case "check-verification":
            console.log("Is this user verified")
            if(user.isVerified){
                return NextResponse.json({ success: "Account Verified", data: user}, { status: 200});
            }
            break;
        default:
            return NextResponse.json({ success: "Internal server error Verifying account", data: user}, { status: 500});
            break;
    }
    
    return NextResponse.json({ success: "Internal server error Verifying account", data: user}, { status: 200});
}