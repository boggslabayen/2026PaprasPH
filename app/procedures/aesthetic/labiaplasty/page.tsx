"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Labiaplasty() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/9.png"}
              width={400}
              height={400}
              alt="Image of Labiaplasty"
              className="pb-8 md:pb-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
            >
              Labiaplasty
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              This is the most commonly performed vaginal rejuvenation
              procedure, usually conducted to reduce the length of the labia
              minora so they don’t hang below the hair-bearing labia majora. It
              is performed to reduce asymmetry either when the labia minora is
              longer than the labia majora, or more commonly, when both labia is
              too long that they twist, tug, or fall out of a bathing suit.
              <br />
              <br />
              Depending on the case, your surgeon may recommend to perform the
              trim procedure where the extra tissue is removed and directly sewn
              up. An alternative is the wedge procedure where a natural border
              is maintained after a pie-shaped piece of tissue has been removed.
              At the same time, reduction of extra folds of the clitoral hood
              can also be done. For closure, absorbable sutures are usually
              utilized.
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
                For 4 weeks prior the surgery, avoid supplements (like vitamin
                C, herbal supplements, and weight-loss supplements).
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                For 2 weeks prior to surgery, avoid blood thinners and
                medication such as NSAIDs.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                For 8 hours prior to surgery, not have any food or liquid
                intake.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Especially the night before, get plenty of rest.
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
              Healing time takes at least 6 weeks, during which time most
              distorting swelling should disappear. For any residual swelling,
              recovery period can take up to 6 months.
              <br />
              <br />
              We recommend our patients to rest and take it easy during this
              time, avoiding any movements that may cause strain to the
              treatment area to prevent any complications. The following week
              after the surgery, swelling and pain can be reduced by icing with
              a cold pack sandwiched between the patient’s underpants and an
              elastic garment.
              <br />
              <br />
              Wearing tampons or having sexual intercourse can be resumed after
              at least 4-6 weeks.
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
