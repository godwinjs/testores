import nodemailer from 'nodemailer';
import cors from 'cors'

export const POST = async (request: any) => {
    let transport = {
        host: 'smtp.gmail.com',
        port: 587,
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

      console.log(request)
}