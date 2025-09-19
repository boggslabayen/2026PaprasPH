import { Suspense } from "react";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RegisterForm />
    </Suspense>
  );
}
