"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/types/login-schema";
import * as z from "zod";
import Link from "next/link";
import { emailSignIn } from "@/server/actions/email-signin";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { AuthCard } from "./auth-cards.";
import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { NewPasswordSchema } from "@/types/new-password-schema";
import { newPassword } from "@/server/actions/new-password";
import { useSearchParams } from "next/navigation";

export const NewPasswordForm = () => {
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { execute, status } = useAction(newPassword, {
    onSuccess(data) {
      if (data.data?.error) setError(data.data.error);
      if (data.data?.success) setSuccess(data.data.success);
    },
  });

  const onSubmit = async (values: z.infer<typeof NewPasswordSchema>) => {
    execute({ password: values.password, token });
  };
  return (
    <AuthCard
      cardTitle="Enter New Password"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      showSocials
    >
      {/* Form Fields Live under this comment */}
      <div>
        <Card
          color="transparent"
          shadow={false}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          //   {...form}
        >
          <Typography
            variant="h4"
            color="blue-gray"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Log in
          </Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Controller
                control={form.control}
                name="password"
                render={({ field }) => (
                  <>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                      placeholder={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Password
                    </Typography>
                    <Input
                      {...field}
                      size="lg"
                      placeholder="*********"
                      type="password"
                      autoComplete="current-password"
                      disabled={status === "executing"}
                      className=" border-1 border-gray-200 px-2 focus:border-blue-500"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      onResize={undefined}
                      onResizeCapture={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      crossOrigin={undefined}
                    />
                  </>
                )}
              />
              <FormSuccess message={success} />
              <FormError message={error} />
              <Button
                variant="text"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="text-left text-blue-500 hover:text-blue-200"
              >
                <Link href="/auth/reset">Forgot your password</Link>
              </Button>
            </div>

            <Button
              size="lg"
              variant="filled"
              type="submit"
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className={`bg-amber-400  text-black hover:text-amber-400 hover:bg-black py-2 rounded-full w-full ${
                status === "executing" ? "animate-pulse" : ""
              }`}
            >
              Reset Password
            </Button>
          </form>
        </Card>
      </div>
    </AuthCard>
  );
};
