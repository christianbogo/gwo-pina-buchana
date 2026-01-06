import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 });
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: 'GPB Website <contact@gwopinabuchanan.com>', // Updated to production domain
            to: ['yael.pina@rsir.com', 'rachel.buchanan@rsir.com', 'dehlan.gwo@rsir.com'],
            cc: 'christianbcutter@yahoo.com',
            replyTo: email,
            subject: `GPB Website Submission from ${name}`,
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
        });

        if (error) {
            console.error('Error sending email:', error);
            // Return specific error message to help debugging
            return NextResponse.json({
                success: false,
                message: 'Failed to send email. Check API Key and Domain Verification.',
                details: error
            }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: 'Email sent successfully', data }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
