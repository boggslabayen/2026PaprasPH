"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function BreastAugmentation() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/aesthetic/2.png"}
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
              Breast Augmentation
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              Also referred to as “boob job,” this cosmetic procedure involves
              the enhancement of the size and shape of the breasts, usually
              conducted through the insertion of implants beneath the breast
              tissue. Depending on your body type, breast anatomy, and skin
              elasticity, our PAPRAS surgeons can help recommend the most
              suitable implant type and size, and incision area to achieve a
              softer, natural-looking augmentation, with minimal scarring. For
              this procedure, there are three different incision areas that your
              surgeon can consider:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Axillary: through the armpit
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Peri-Areolar: through the half-circle of the areola
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Infra-Mammary: beneath the breast
              </li>
            </ul>
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
                Have a realistic set of expectations for what the breast
                augmentation can accomplish.
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
              Breast augmentations are an outpatient procedure, typically done
              under general anaesthesia.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              We recommend our patients to rest and take it easy during this
              time, avoiding any movements that may cause strain to the chest
              area (such as lifting or stretching) to prevent any complications.
              During this time, we also recommend our patients to use brassieres
              with no underwires throughout the healing period.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Patients may resume physical activities 1-2 months post-procedure.
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
