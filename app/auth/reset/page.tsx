import { Suspense } from "react";
import { ResetForm } from "@/components/auth/reset-form";

export default function Reset() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResetForm />
    </Suspense>
  );
}
