import { Resend } from 'resend';
import { NextResponse } from "next/server" 

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req) {
    const { email, subject, message } = await req.json();
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: ['nkarvindkumar@gmail.com'],
            subject: subject,
            reply_to: email,
            react: (
                <>
                    <h2>Message from your Portfolio form</h2>
                    <h3>Form response: </h3>
                    <p>{message}</p>
                </>
            ),
          });
        return NextResponse.json(data);
    } catch (error) {
        if (e instanceof Error) {
            console.log(`Failed to send email: ${e.message}`);
          }
          return NextResponse.json({
            error: 'Internal server error.'
          }, {
            status: 500
          });
    }
}
