"use client";
import { Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex  items-center gap-2">
      <Button
        variant="outlined"
        className="w-3/6 bg-white text-gray-800 hover:bg-amber-400 border-1 border-gray-100 py-3 rounded-full"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={() =>
          signIn("google", {
            redirect: true,
            callbackUrl: "/dashboard", // Redirect to dashboard after login
          })
        }
      >
        <div className="flex gap-2 items-center justify-center">
          Sign in with Google
          <FcGoogle className="w-5 h-5" />
        </div>
      </Button>

      <Button
        variant="outlined"
        className="w-3/6 bg-white text-gray-800 hover:bg-amber-400 border-1 border-gray-100 py-3 rounded-full"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={() =>
          signIn("github", {
            redirect: true,
            callbackUrl: "/dashboard", // Redirect to dashboard after login
          })
        }
      >
        <div className="flex gap-2 items-center justify-center">
          Sign in with Google
          <FaGithub className="w-5 h-5" />
        </div>
      </Button>
    </div>
  );
}
