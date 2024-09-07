import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import cors from 'cors'

export const POST = async (request: any) => {
    const { email, message, name } = await request.json();

    let transport = {
        host: 'smtp.gmail.com', // mail provider smtp
        port: 465, //465 ssl 587 tls
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    }

    let transporter = nodemailer.createTransport(transport)

    transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Server is ready to take messages ' + success);
        }
      });

      let content = `<html>
                        <head>
                        <title>${name} is contacting you</title>
                        </head>
                        <body style=\"background-color:#fafafa;\">
                            <div style=\"padding:20px;\">
                            Date: <span style=\"color:#888\">${new Date()}</span>
                            <br>
                            Email: <span style=\"color:#888\">${email}</span>
                            <br>
                            Message: <div style=\"color:#888\">${message}</div>
                            </div>
                        </body>
                    </html>`;

        let mail = {
            from: name,
            to: 'truthempirestores@gmail.com, rachealonyi.dev@gmail.com',  // Email add to recieve mail
            subject: 'New Message from TruthStore Contact Form',
            html: content
            }

        transporter.sendMail(mail, (err, data) => {
            console.log({"ERROR": err})
                if (err) {
                    return NextResponse.json({message: "message not sent, there was an error", data: { status: "fail"}}, { status: 200});
                } else {
                    return NextResponse.json({message: "message sent succesfully", data: { status: "success", data: data}}, { status: 200});
                }
            })
    //   
}