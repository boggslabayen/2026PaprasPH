"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Liposuction() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/3.png"}
              width={400}
              height={400}
              alt="Image of Liposuction"
              className="pb-8 md:pb-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
            >
              Liposuction
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              This procedure aims to slim and reshape the body by removing
              unwanted body fat through laser heat in areas with excess fat.
              Also commonly referred to as “lipo”, this procedure is very common
              among patients who want to improve the shape, proportion, and
              contour of the body. The procedure can also be carried out along
              with other cosmetic procedures such as a tummy tuck, and breast
              augmentation. Liposuction is typically carried out across these
              common areas: Belly, Hips and buttocks, Back and upper arms It is
              important to note that Liposuction is not a direct replacement or
              substitute for maintaining a healthy, well-balanced diet and
              exercise nor a treatment to obesity.
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
              Ahead of the surgery, patients may be asked to:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing or increase risks of
                complications during surgery
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Avoid taking aspirin or anti-inflammatory drugs, which may
                increase bleeding
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Have a realistic set of expectations for what liposuction can
                accomplish.
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
              We recommend our patients to rest and take it easy during this
              time, avoiding any movements that may cause strain to the
              treatment area to prevent any complications.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Compression garments will be provided post-surgery to control
              swelling and compress the skin according to your new shape. Small
              tubes may also be placed in incision areas for drainage of excess
              fluid.
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
