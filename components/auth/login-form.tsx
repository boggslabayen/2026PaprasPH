"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/types/login-schema";
import z from "zod";
import Link from "next/link";
import { emailSignIn } from "@/server/actions/email-signin";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";

import { AuthCard } from "./auth-cards.";
import { Card, Input, Typography, Button } from "@material-tailwind/react";

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState("");
  const { execute, status } = useAction(emailSignIn, {
    onSuccess(data) {
      console.log(data);
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    execute(values);
  };
  return (
    <AuthCard
      cardTitle="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="Create an Account"
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
                name="email"
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
                      Your Email
                    </Typography>
                    <Input
                      {...field}
                      size="lg"
                      placeholder="name@mail.com"
                      type="email"
                      autoComplete="email"
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
              {"Login"}
            </Button>
          </form>
        </Card>
      </div>
    </AuthCard>
  );
};
