import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

import { updateUser } from "@/app/db/services/user.service";

export const POST = async (req: NextRequest, { params }: { params: { accountRoutes: [string] }}) => {
    const data = await req.json();
    // const route = req.url.split("account/")[1];
    const route = params.accountRoutes[0];

    let c = await updateUser(data.email, data)

    console.log(c)
    return NextResponse.json({message: "done..", data: 'hello'}, { status: 200})
}