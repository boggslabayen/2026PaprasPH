"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Botox() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/non-surgical/1.png"}
              width={400}
              height={400}
              alt="Image of abdominoplasty"
              className="pb-8 md:pb-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
            >
              Botox®
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              Botox (Botulinum toxin) injections are one of the most common
              non-surgical cosmetic procedures, which involve the removal of
              wrinkles, crow’s feet, and frown lines. The procedure relaxes
              facial muscles and smoothens out lines for a more youthful
              appearance.
            </p>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              Botox injections also have numerous other benefits, aside from
              wrinkle removal:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Softening of neck bands
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Eyebrow contouring
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                It can also help address extensive sweating in the palms,
                armpits, and soles
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Minimize enlarged calf muscles
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl mx-auto py-0">
          <p
            className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
          >
            While our expert PAPRAS doctors can help you achieve any of these
            goals, Botox injections cannot improve severe skin conditions that
            are caused by extensive sun damage. At this stage, our doctors can
            help recommend additional procedures to help you achieve your
            desired look.
          </p>
          <div className="px-4 md:px-0">
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              Preparation
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Ahead of the surgery, it is highly advisable that patients:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Have a realistic set of expectations for what the botox
                injections can accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing.
              </li>
            </ul>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Patients should avoid Botox procedures during pregnancy or while
              breastfeeding.
            </p>
          </div>

          <div className="px-4 md:px-0">
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              Healing and Recovery
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Patients can expect immediate results, but in some instances, it
              can take as long as 5 days for the full effects to show.
              <br />
              <br />
              Patients may also resume normal daily activities, with caution,
              post-procedure.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center max-w-4xl mx-auto py-8">
        <Link href={"/procedures/non-surgical"}>
          <Button
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="outlined"
            className="px-8 rounded-full bg-amber-300 border-0 hover:bg-black hover:text-amber-300"
          >
            View More Non-surgical Procedures
          </Button>
        </Link>
      </section>
    </main>
  );
}
