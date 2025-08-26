"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export const BackButton = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  return (
    <Button
      variant="text"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="text-blue-500 hover:text-blue-950 px-4 py-2"
    >
      <Link href={href} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
};
