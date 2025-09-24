"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function GlutealAugmentation() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/8.png"}
              width={400}
              height={400}
              alt="Image of Facelift"
              className="pb-8 md:pb-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
            >
              Gluteal Augmentation
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              Typically referred to as “butt implants,” this cosmetic procedure
              involves the placement of implants within the buttocks area to
              enhance the shape, add volume, and improve the physique.
              <br />
              <br />
              This procedure involves grafting or harvesting fat from other
              areas of the body (such as the abdomen or thighs), and then
              injecting this into the buttocks. To achieve a natural look, this
              is oftentimes accompanied by inserting a silicon implant in the
              buttocks.
              <br />
              <br />
              Gluteal augmentation is also typically done simultaneously with a
              Liposuction to control the buttocks area and to achieve a more
              holistic and natural look.
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
                Have a realistic set of expectations for what a Gluteal
                Augmentation can accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing or increase risks of
                complications during surgery.
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
              During this time, we recommend our patients to rest and take it
              easy to prevent swelling or complications.
              <br />
              <br />
              Patients can expect swelling for the first two weeks, and bandages
              may be required by your surgeon for up to six weeks, until the
              swelling subsides.
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
