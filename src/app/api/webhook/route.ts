import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
const crypto = require('crypto');

const secret = process.env.PSTACK_SECRET as string;

// export const config = {
//     api: {
//         bodyParser: false
//     }
// }

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log('webhook listening....')
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');

    try {
        if(req.method !== "POST") return res.status(405).send("Only send POST requests."); // Ext sec

        if (hash == req.headers['x-paystack-signature']) {
            // Retrieve the request's body
            const event = req.body;
            // Do something with event  
            console.log('event', event)
        }
        
        return new NextResponse("Server Succ: " + req, {status: 200})

    }catch(error) {
        return new NextResponse("Server Err: ", {status: 500})
    }

}