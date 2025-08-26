"use client";
import { Button } from "@material-tailwind/react";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export const UserButton = ({ user }: Session) => {
  return (
    <>
      <h1>{user?.email}</h1>
      <Button
        variant="filled"
        className="bg-amber-400 rounded-full hover:bg-black hover:text-amber-400"
        size="sm"
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </>
  );
};
