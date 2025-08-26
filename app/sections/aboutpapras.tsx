"use client";

import { manrope, roboto } from "../ui/fonts/fonts";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function AboutPapras() {
  return (
    <section className="my-8 px-4">
      <div className="md:grid md:grid-cols-2 content-center gap-4 max-w-3xl mx-auto py-8">
        <div>
          <Image
            src={"/docs/AboutImage.png"}
            width={656}
            height={498}
            alt="Doctors in pose"
            className="h-full pb-8 md:pb-0"
          />
        </div>
        <div>
          <p className={`${roboto.className} font-light text-lg`}>
            About PAPRAS
          </p>
          <h3
            className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
          >
            Pioneering Excellence in Plastic, Reconstructive, and Aesthetic
            Surgery Since 1961.
          </h3>
          <p
            className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
          >
            From training world-class surgeons to serving communities in need,
            PAPRAS continues its legacy of innovation, education, and
            compassion.
          </p>

          <Button
            variant={"filled"}
            size="lg"
            className={`rounded-full ${roboto.className} bg-amber-500  hover:bg-black hover:text-amber-500 px-8 py-4`}
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
