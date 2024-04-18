import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server';

// import { updateUser, findByEmail } from "@/app/db/services/user.service";

export const POST = async (req: NextRequest, { params }: { params: { accountRoutes: [string] }}) => {
    // const data = await req.json();
    // const route = req.url.split("account/")[1];
    const route = params.accountRoutes[0];

    // await updateUser(data.email, data);
    // const user = await findByEmail(data.email);
    console.log(route)
    switch(route){
        case 'checkout':
            return NextResponse.json({message: "Done", data: {route: "route"}}, { status: 200})
        default:
          return NextResponse.json({message: "Done", data: 'api route not found and is denied.'}, { status: 404})
      }
}