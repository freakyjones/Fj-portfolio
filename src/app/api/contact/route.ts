import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas/contact";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = validation.data;

    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey || !emailTo) {
      console.error("Missing required environment variables: RESEND_API_KEY or EMAIL_TO.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is currently unavailable.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    try {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>", // This can be a generic address
        to: emailTo,
        subject: `New Message from ${name}: ${subject}`,
        replyTo: email,
        html: `<p>You have a new message from your portfolio contact form:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });

      if (error) {
        throw new Error(error.message);
      }

      return NextResponse.json({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (emailError: any) {
      console.error("Email sending error:", emailError);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
          error: emailError.message,
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 },
    );
  }
}
