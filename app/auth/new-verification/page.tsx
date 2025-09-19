import { Suspense } from "react";
import { EmailVerificationForm } from "@/components/auth/email-verification-form";

export default function EmailVerification() {
  return;
  <Suspense fallback={<p>Loading...</p>}>
    <EmailVerificationForm />
  </Suspense>;
}
