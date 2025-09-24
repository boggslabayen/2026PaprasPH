"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Blepharoplasty() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/5.png"}
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
              Blepharoplasty
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              More commonly known as an ‘eyelid surgery,’ Blepharoplasty is a
              cosmetic surgery procedure best known for treating droopy eyelids.
              This form of procedure can be done in the upper, lower, or both
              eyelids.
              <br /> Patients typically seek this form of surgery to help
              improve the area around the eyes, resulting in a more rejuvenated
              and youthful appearance.
              <br /> Eyelid surgeries help address excess skin and droopy
              eyelids, wrinkles and bags under the eyes, as well as puffiness in
              the eyelids caused by fatty deposits.
              <br /> Depending on your desired outcome, your expert PAPRAS
              surgeon can help address the best procedure to help you achieve a
              more youthful and rejuvenated look. Ahead of the procedure, they
              are well positioned to provide you with a recommended plan of
              action based on a thorough examination or evaluation of your
              facial anatomy.
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
                Have a realistic set of expectations for what the Blepharoplasty
                can accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Schedule a consultation with our PAPRAS surgeons for a full
                examination of your facial anatomy
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s, which can impact healing or increase risks of
                complications during surgery.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Do not have any underlying or serious eye conditions
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
