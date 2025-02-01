import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import * as amqp from 'amqplib';

interface EmailData {
    from: string;
    to: string;
    subject: string;
    html: string;
    text: string;
}

export const POST = async (request: any, res: any) => {
      res.setHeader("Access-Control-Allow-Origin", "https://godwinfolio.vercel.app");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    
    const { email, message, name, to, subject, text, link } = await request.json(); // add subject
    // console.log({ email, message, name, to, subject, text, link })

    let transport = {
        host: 'smtp.gmail.com', // mail provider smtp
        service: 'gmail', // or your email service
        port: 465, //465 ssl 587 tls
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
      }
    }

    let transporter = nodemailer.createTransport(transport)

    transporter.verify((error, success) => {
        if (error) {
          console.log("Send mail verification error", error);
        } else {
          console.log('Server is ready to take messages ' + success);
        }
    });

    let content = text ? `<html>
    <head>
    <title>${name} is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
        <div style=\"padding:20px;\">
        Date: <span style=\"color:#888\">${new Date()}</span>
        <br>
        Email: <span style=\"color:#888\">${to}</span>
        <br>
        <strong>${text}</strong>: <div style=\"color:#888\">${link}</div>
        </div>
    </body>
    </html>` : `<html>
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

    let EmailData = {
        from: name || email,
        to: to,  // Email add to recieve mail
        subject: subject,
        html: content,
        text: message || text
    }

    async function sendToQueue(emailData: EmailData): Promise<void> {
        try {
            const conn = await amqp.connect('amqp://localhost'); // Connect to RabbitMQ server
            const channel = await conn.createChannel(); // Create a channel
            const queue = 'emails'; // Name of the queue
    
            await channel.assertQueue(queue, { durable: true }); // Ensure the queue exists and is durable
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(emailData)), { persistent: true }); // Send email data to the queue
    
            console.log('Email request sent to queue');
            setTimeout(() => {
                channel.close();
                conn.close();
            }, 500);
        } catch (error) {
            console.error('Failed to send to queue:', error);
        }
    }

    async function startWorker(): Promise<void> {
        try {
            // const conn = await amqp.connect('amqp:https://dev.rabbitmq.com');
            const conn = await amqp.connect('amqp://localhost'); //amqp://dev.rabbitmq.com
            const channel = await conn.createChannel();
            const queue = 'emails';
    
            await channel.assertQueue(queue, { durable: true });
            console.log("Waiting for messages in %s. To exit press CTRL+C", queue);
    
            channel.consume(queue, async (msg) => {
                if (msg !== null) {
                    const emailData: EmailData = JSON.parse(msg.content.toString());
                    await sendEmail(emailData);
                    channel.ack(msg); // Acknowledge the message after processing
                }
            });
        } catch (error) {
            console.error('Error starting worker:', error);
        }
    }

    async function sendEmail(emailData: EmailData) {
    
        try {
            transporter.sendMail(emailData, (error, info) => {
                if(error){
                    console.error('Error sending email:', error);
                }else {
                    console.log('Email Sent: %s', info.messageId);
                    return new NextResponse("True: message sent succesfully", { status: 200});
                }
            })
            
            return new NextResponse("message sent succesfully", { status: 200});
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
        
    // startWorker();
    await sendEmail(EmailData); //check if it works without setting up webhook
    return new NextResponse("message sent succesfully! But this is just a fix. for a better result, setup a listener.", { status: 200});
    // return new NextResponse("message: server issues", { status: 500})
    //   
}


// ref: https://mailtrap.io/blog/sending-emails-with-nodemailer/ see: Asynchronous email sending
