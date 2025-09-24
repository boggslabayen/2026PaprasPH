"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Rhinoplasty() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/1.png"}
              width={400}
              height={400}
              alt="Image of Rhinoplasty"
              className="pb-8 md:pb-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
            >
              Rhinoplasty
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              More commonly referred to as a “nose job,” this cosmetic procedure
              involves reshaping or restructuring the nose to enhance facial
              harmony, correct structure and function, and/or breathing
              difficulties, especially after an injury. Although rhinoplasty is
              one of the most common cosmetic procedures today, it is still a
              highly individualized procedure. Different areas of the nose may
              require different techniques, and these are usually based on your
              preferences and your plastic surgeon’s recommendations. Depending
              on your desired outcome, our well-experienced PAPRAS surgeons can
              modify the bridge, the tip, the ala, and the overall size and
              shape of the nose during a Rhinoplasty procedure. All of these are
              done in order to achieve a realistic, yet long-lasting look.
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
                Have a realistic set of expectations for what the rhinoplasty
                can accomplish. It is not uncommon for a patient to bring a
                picture of a celebrity to serve as a ‘peg’
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing or increase risks of
                complications during surgery
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
              Healing time takes around 1-2 weeks and is best determined by the
              surgeon who will do the procedure. We recommend our patients to
              rest and take it easy during this time to prevent swelling or
              complications.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              While the swelling may subside within a few weeks time, it may
              take up to a year for your new nose to heal completely.
            </p>
          </div>

          <div className="px-4 md:px-0">
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              Important Note:
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Following health and safety guidelines, your plastic surgeon may
              advise you to provide thorough information on your medical
              history. In this time of COVID-19, rhinoplasty is considered a
              high-risk procedure and requires a negative PCR swab result prior
              to surgery.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-center max-w-4xl mx-auto py-8">
        <Link href={"/procedures/aesthetic"}>
          <Button
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="outlined"
            className="px-8 rounded-full bg-amber-300 border-0 hover:bg-black hover:text-amber-300"
          >
            View More Aesthetic Procedures
          </Button>
        </Link>
      </section>
    </main>
  );
}
