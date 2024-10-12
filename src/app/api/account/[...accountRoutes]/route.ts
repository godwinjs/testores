import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server';

import { updateUser, findByEmail, updateOrders } from "@/app/db/services/user.service";
import connect from "@/app/db/utils/connect";

export const POST = async (req: NextRequest, { params }: { params: { accountRoutes: [string] }}) => {
    const data = await req.json();
    // const route = req.url.split("account/")[1];
    const route = params.accountRoutes[0];

    try {
        await connect();
        switch (route) {
            case "update":
                const updatedUser = await updateUser(data.email, data);
                return NextResponse.json({message: "Done", data: updatedUser}, { status: 200})
            case "update_orders":
                const updatedOrder = await updateOrders(data.email, data);
                return NextResponse.json({message: "Done", data: updatedOrder}, { status: 200})
            case "fetch_user":
                const user = await findByEmail(data.email);
                return NextResponse.json({message: "Done", data: user}, { status: 200})
            default:
                return NextResponse.json({message: "Done", data: {status: 'default returned for ' + route + 'route'}}, { status: 200})
        }
    } catch(err) {
        return NextResponse.json({message: "Error connecting to mongoose while trying to update user", data: {route: route + 'route'}}, { status: 500})
    }
}