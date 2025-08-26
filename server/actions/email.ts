'use server'

import getBaseURL from "@/lib/base-url"
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

const domain = getBaseURL();

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`
    const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">Here</a> to confirm your email.</p>`,
  });
}

