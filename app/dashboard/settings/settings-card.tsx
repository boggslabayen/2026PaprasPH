"use client";

import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Avatar,
  Switch,
} from "@material-tailwind/react";

import { Session } from "next-auth";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SettingsSchema } from "@/types/settings-schema";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { settings } from "@/server/actions/settings";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/app/api/uploadthing/upload";

type SettingsForm = {
  session: Session;
};

export default function SettingsCard(session: SettingsForm) {
  const [error, setError] = useState<string | undefined>(null);
  const [success, setSuccess] = useState<string | undefined>(null);
  const [avatarUploading, setAvatarUploading] = useState(false);

  console.log(session.session.user);

  const form = useForm({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: session.session.user?.name || undefined,
      image: session.session.user?.image || undefined,
      email: session.session.user?.email || undefined,
      //   isTwoFactorEnabled: session.session.user?.isTwoFactorEnabled || undefined,
    },
  });

  const { execute, status } = useAction(settings, {
    onSuccess: (data) => {
      if (data.data?.success) setSuccess(data.data.success);
      if (data.data?.error) setError(data.data.error);
    },
    onError: (error) => {
      setError("Something went wrong");
    },
  });

  const onSubmit = async (values: z.infer<typeof SettingsSchema>) => {
    console.log(values);
    execute(values);
  };

  return (
    <Card
      className="m-6 w-1/2 border-2 border-gray-200 bg-white"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="p-4">
        <Typography
          variant={undefined}
          color="blue-gray"
          className="text-2xl font-bold"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Settings
        </Typography>
        <Typography
          variant={undefined}
          color="blue-gray"
          className="text-xl"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Update your account settings
        </Typography>
      </div>

      <CardBody
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
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
            <form
              className=" mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="mb-1 flex flex-col gap-6">
                {/* Avatar */}
                <Controller
                  control={form.control}
                  name="image"
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
                        Avatar
                      </Typography>
                      <div className="flex flex-col">
                        {!form.getValues("image") && (
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-sm font-medium text-gray-700">
                            {session.session.user?.name
                              ?.charAt(0)
                              .toUpperCase()}
                          </div>
                        )}
                        {form.getValues("image") && (
                          <Avatar
                            variant="circular"
                            alt={"User Image"}
                            className="cursor-pointer w-10 rounded-full"
                            src={form.getValues("image")!}
                            placeholder={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                          />
                        )}
                        <UploadButton
                          appearance={{
                            button: "",
                            container:
                              "w-max flex-row rounded-md border-cyan-300  mt-4",
                            allowedContent:
                              "flex h-8 flex-col items-center justify-center px-2 text-black",
                          }}
                          endpoint={"avatarUploader"}
                          onUploadBegin={() => {
                            setAvatarUploading(true);
                          }}
                          onUploadError={(error) => {
                            form.setError("image", {
                              type: "validate",
                              message: error.message,
                            });
                            setAvatarUploading(false);
                            return;
                          }}
                          onClientUploadComplete={(res) => {
                            form.setValue("image", res[0].ufsUrl);
                            setAvatarUploading(false);
                            return;
                          }}
                          content={{
                            button({ ready }) {
                              if (ready) return <div>Change Avatar</div>;
                              return <div>Uploading...</div>;
                            },
                          }}
                        />
                      </div>
                    </>
                  )}
                />
                {/* Name */}
                <Controller
                  control={form.control}
                  name="name"
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
                        Name
                      </Typography>
                      <Input
                        {...field}
                        size="lg"
                        placeholder="Username"
                        type="text"
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

                {/* Email */}

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

                {/* Password */}

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
                        disabled={
                          status === "executing" ||
                          session?.session.user.isOAuth
                        }
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

                {/* New Password */}

                <Controller
                  control={form.control}
                  name="newPassword"
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
                        New Password
                      </Typography>
                      <Input
                        {...field}
                        size="lg"
                        placeholder="*********"
                        disabled={
                          status === "executing" ||
                          session?.session.user.isOAuth
                        }
                        type="password"
                        autoComplete="new-password"
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
              </div>

              <FormError message={error} />
              <FormSuccess message={success} />

              <Button
                size="lg"
                variant="filled"
                type="submit"
                placeholder={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="bg-amber-400  text-black hover:text-amber-400 hover:bg-black py-2 rounded-full w-64 my-8"
                // disabled={
                //   status === "executing" || session?.session.user.isOAuth
                // }
              >
                {"Update your Settings"}
              </Button>
            </form>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}
