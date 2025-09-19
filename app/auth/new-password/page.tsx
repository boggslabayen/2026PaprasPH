import { Suspense } from "react";
import { NewPasswordForm } from "@/components/auth/new-password-form";

export default function NewPass() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NewPasswordForm />
    </Suspense>
  );
}
