import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, details, message, image_link, type } = body;

    const currentTime = new Date().toLocaleTimeString();

    const { data, error } = await resend.emails.send({
      from: 'Yarl Lankan <onboarding@resend.dev>',
      to: [process.env.CLIENT_RECEIVING_EMAIL as string],
      subject: type === 'inquiry' 
        ? `Product Inquiry: ${subject} [${currentTime}]` 
        : `New Contact Message from ${firstName} [${currentTime}]`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #723e1b; border-radius: 12px; overflow: hidden;">
          <div style="background: #723e1b; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New ${type === 'inquiry' ? 'Inquiry' : 'Message'} Received</h1>
          </div>
          <div style="padding: 30px; color: #333;">
            <p style="font-size: 16px;"><strong>From:</strong> ${firstName} ${lastName}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Phone:</strong> ${phone || 'Not Provided'}</p>
            <p style="font-size: 16px;"><strong>Subject:</strong> ${subject || 'Contact Us'}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 16px; font-weight: bold;">Message Content:</p>
            <p style="font-size: 15px; line-height: 1.6; background: #fdfaf8; padding: 15px; border-radius: 8px; color: #555;">
              ${details || message}
            </p>
            
            ${image_link ? `
              <div style="margin-top: 25px;">
                <p style="font-size: 16px; font-weight: bold; margin-bottom: 10px;">Attached Image Reference:</p>
                <img src="${image_link}" alt="Inquiry Image" style="width: 100%; border-radius: 10px; border: 2px solid #723e1b;" />
                <p style="text-align: center; margin-top: 10px;">
                   <a href="${image_link}" style="color: #723e1b; text-decoration: underline; font-size: 14px;">View Full Resolution Image</a>
                </p>
              </div>
            ` : ''}
          </div>
          <div style="background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #999;">
            This email was sent from Yarl Spices Website Lead System.
          </div>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}