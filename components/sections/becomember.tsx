"use client";

import classes from "@/components/sections/becomemember.module.css";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function BecomeAMember() {
  return (
    <section className={`${classes.background} bg-amber-400 py-16 px-4`}>
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Become a PAPRAS Fellow and gain access to unparalleled training,
          mentorship, and opportunities
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          Join the ranks of esteemed surgeons dedicated to advancing the art and
          science of plastic, reconstructive, and aesthetic surgery.
        </p>

        <Link href="/becomeamember">
          <Button
            variant={"outlined"}
            size="lg"
            className={`rounded-full ${roboto.className} bg-transparent border-1 border-black hover:bg-black hover:text-amber-500 px-8 py-4`}
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Learn More
          </Button>
        </Link>
      </div>

      <div className={`flex gap-4 justify-center`}>
        <Image
          src={"/docs/Doc1.png"}
          width={227}
          height={289}
          alt={"Doctor in uniform"}
          className="w-16 md:w-32 -rotate-15"
        />

        <Image
          src={"/docs/Doc2.png"}
          width={227}
          height={289}
          alt={"Doctor in uniform"}
          className="w-16 md:w-32 rotate-15 "
        />

        <Image
          src={"/docs/Doc3.png"}
          width={227}
          height={289}
          alt={"Doctor in uniform"}
          className="w-16 md:w-32 -rotate-15 "
        />

        <Image
          src={"/docs/Doc4.png"}
          width={227}
          height={289}
          alt={"Doctor in uniform"}
          className="w-16 md:w-32 rotate-15 "
        />
      </div>
    </section>
  );
}
