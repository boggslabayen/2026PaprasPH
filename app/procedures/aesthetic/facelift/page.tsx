"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Facelift() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/4.png"}
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
              Facelift
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              A facelift is one of the most common cosmetic procedures today.
              This specific procedure involves tightening and firming up the
              sagging skin to help create a rejuvenated and more youthful
              appearance. As we age, our facial tissues start to lose its
              elasticity, leaving jowls, wrinkles, and loose skin in the face
              and neck area. Facelifts help reduce signs of ageing by removing
              sagging facial tissues, reducing visible lines and folds, and
              tightening the skin. <br />
              Patients with only mild sagging may only be recommended to undergo
              a mini or moderate facelift. This is a less-invasive procedure,
              which involves shorter incisions usually along the hairline and
              ears.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl mx-auto py-0">
          <div className="px-4 md:px-0">
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              On the other hand, standard facelifts are typically performed on
              patients that need more extensive or pronounced results. Aside
              from tightening and lifting the sagging facial tissues, your
              surgeon may also reposition and remove excess skin to give you a
              more youthful and tighter appearance.
              <br /> Depending on your desired outcome, you can be assured of
              our PAPRAS surgeons’ expertise and comprehensive knowledge of the
              facial anatomy. They can help offer sound advice on which type of
              facelift is most suitable to help you achieve a realistic, yet
              long-lasting look.
            </p>
          </div>

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
                Have a realistic set of expectations for what the facelift can
                accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Schedule a consultation with our PAPRAS surgeons to know more
                about their aesthetic style and technique.
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
              The recovery period for a facelift is fairly quick for most
              patients. Healing time takes around 1-2 weeks and is best
              determined by the surgeon who will do the procedure. We recommend
              our patients to rest and take it easy during this time to prevent
              swelling or complications.
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
