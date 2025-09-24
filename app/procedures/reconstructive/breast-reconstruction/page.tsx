"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function BreastReconstruction() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/reconstructive/2.png"}
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
              Breast Reconstruction
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              Cleft Lip and Palate repair is a reconstructive procedure that
              aims to correct abnormalities or birth defects within the lip and
              face.
              <br />
              <br />
              This is a very common abnormality among infants, which can be
              caused by genetic or environmental factors during fetal
              development. It is characterized by the incomplete development of
              the roof of the mouth or upper lip.
              <br />
              <br />
              This procedure helps correct the physical appearance as well as
              restore air flow and breathing functions.
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
                Have a realistic set of expectations for what breast reduction
                can accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing or increase risks of
                complications during surgery
              </li>
            </ul>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Breast reconstruction is a very individualized procedure and as
              such, we highly recommend all our patients to take note of the
              following important issues:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                The procedure may require more than one surgical operation
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Breast reconstruction with implants may not be suitable for
                patients who need to undergo radiotherapy.
              </li>
            </ul>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Depending on your health concerns, our highly skilled PAPRAS
              doctors can help prescribe the most suitable type of procedure for
              you.
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
              Post-surgery we ask that patients rest and take it easy during
              this time, avoiding any movements that may cause strain to the
              chest area (such as lifting or stretching) to prevent any
              complications.
              <br />
              <br />
              It is not uncommon for PAPRAS surgeons to recommend treatment for
              pain relief after the procedure. Small tubes may also be placed in
              incision areas for drainage of excess fluid.
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
        <Link href={"/procedures/reconstructive"}>
          <Button
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="outlined"
            className="px-8 rounded-full bg-amber-300 border-0 hover:bg-black hover:text-amber-300"
          >
            View More Reconstructive Procedures
          </Button>
        </Link>
      </section>
    </main>
  );
}
