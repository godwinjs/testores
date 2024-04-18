import { NextRequest, NextResponse } from "next/server"
const crypto = require('crypto');

const secret = process.env.PSTACK_SECRET as string;

export const config = {
    api: {
        bodyParser: false
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    console.log('webhook listening....')

    try {
        if(req.method !== "POST") return new NextResponse("Only send POST requests." + req, {status: 405})// Ext sec
        const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');

        if (hash !== req.headers.get('x-paystack-signature')) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const event = req.body;
        console.log('event', event);
        
        return new NextResponse("Server Succ: " + req, {status: 200}) //remove req later, was put in for debugging

    }catch(error) {
        return new NextResponse("Server Err: ", {status: 500})
    }

}