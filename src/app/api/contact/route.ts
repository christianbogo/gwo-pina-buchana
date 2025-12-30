import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Configure transport - User needs to provide process.env.EMAIL_USER and EMAIL_PASS
        // or configure their own SMTP settings. 
        // For now, mirroring typical setup. 
        const transporter = nodemailer.createTransport({
            service: 'yahoo', // explicit service or use host/port
            auth: {
                user: process.env.EMAIL_USER || 'christianbcutter@yahoo.com', // Fallback for dev/testing if env not set, though auth determines sender
                pass: process.env.EMAIL_PASS,
            },
        });

        // If no env vars, this might fail to send real emails, but the logic is here.
        // In a real app, never hardcode credentials.

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'christianbcutter@yahoo.com', // Receiver as requested
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<hr/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
        } else {
            console.log('Mock Email Send:', mailOptions);
            return NextResponse.json({ success: true, message: 'Email logic simulated (missing credentials)' }, { status: 200 });
        }

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
