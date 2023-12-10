import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server';

import { findByEmail } from "@/app/db/services/user.service";

export const POST = async (req: NextRequest, { params }: { params: { action: [string] }}) => {
    const data = await req.json();
    const route: string = params.action[0];

    // await saveProducts(data);
    let user;
    switch(route){
      case 'getUser':
        user = await findByEmail(data.email);
        return NextResponse.json({message: "Done", data: user}, { status: 200});
      default:
        return NextResponse.json({message: "Done", data: 'api route not found and is denied.'}, { status: 404})
    }
}