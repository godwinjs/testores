import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server';

import { updateUser, findByEmail } from "@/app/db/services/user.service";

export const POST = async (req: NextRequest, { params }: { params: { accountRoutes: [string] }}) => {
    const data = await req.json();
    // const route = req.url.split("account/")[1];
    const route = params.accountRoutes[0];

    await updateUser(data.email, data);
    const user = await findByEmail(data.email);
    console.log(user)

    return NextResponse.json({message: "Done", data: user}, { status: 200})
}