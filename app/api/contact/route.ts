import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, city, message } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL, // client email
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f7;
              margin: 0;
              padding: 0;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            h2 {
              color: #1a73e8;
              margin-bottom: 20px;
            }
            p {
              line-height: 1.6;
              margin: 10px 0;
            }
            .label {
              font-weight: bold;
              color: #555;
            }
            .message {
              padding: 15px;
              background-color: #f1f5f9;
              border-radius: 5px;
              margin-top: 10px;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #999;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <p>Hello <strong>Bindabasani Logistics Team</strong>,</p>
            <p>You have received a new message via your contact form. Here are the details:</p>
      
            <h2>Contact Form Submission</h2>
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Phone:</span> ${phone}</p>
            <p><span class="label">City:</span> ${city}</p>
            <p class="label">Message:</p>
            <div class="message">${message}</div>
      
            <p>Kindly review and respond to the sender at your earliest convenience.</p>
      
            <div class="footer">
              &copy; ${new Date().getFullYear()} Bindabasani Logistics. All rights reserved.
            </div>
          </div>
        </body>
      </html>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
