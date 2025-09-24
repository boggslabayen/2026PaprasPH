"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Fillers() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/non-surgical/3.png"}
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
              Fillers
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              Injectable dermal fillers containing hyaluronic acid are one of
              the most common non-surgical procedures to treat or reduce the
              appearance of wrinkles, frown lines, and crow’s feet.
              <br />
              <br />
              Fillers also help create a fuller, more plump definition to the
              face, restoring volume in areas such as the cheeks and other
              facial contours.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl mx-auto py-0">
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
                Have a realistic set of expectations for what filler injections
                can accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing.
              </li>
            </ul>
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
