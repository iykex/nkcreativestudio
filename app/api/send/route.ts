import { EmailTemplate } from '../../../components/email-template';
import { UserConfirmationTemplate } from '../../../components/user-confirmation-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, location, phone, date, details } = await req.json();
  try {
    const ownerEmail = resend.emails.send({
      from: "AP Creative Studio <inquiry@apcreativestudio.net>",
      to: "nana@apcreativestudio.net",
      subject: "NEW MESSAGE FROM YOUR WEBSITE",
      replyTo: email,
      react: EmailTemplate({ name, email, location, phone, date, details }),
    });

    const userEmail = resend.emails.send({
      from: "AP Creative Studio <inquiry@apcreativestudio.net>",
      to: email,
      subject: "Thank you for your message!",
      react: UserConfirmationTemplate({ name }),
    });

    const [ownerResponse, userResponse] = await Promise.all([ownerEmail, userEmail]);

    if (ownerResponse.error) {
      return Response.json({ error: ownerResponse.error.message || 'Something went wrong' }, { status: 500 });
    }

    if (userResponse.error) {
      // Log the error, but don't block the success response to the user
      console.error("Failed to send confirmation email:", userResponse.error);
    }

    return Response.json(ownerResponse.data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    return Response.json({ error: message }, { status: 500 });
  }
}