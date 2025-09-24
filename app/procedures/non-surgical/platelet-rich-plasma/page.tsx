"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function PlateletRichPlasma() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/non-surgical/5.png"}
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
              Platelet Rich Plasma
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              More popularly known as the ‘vampire facial,’ the PRP Treatment is
              a sought after cosmetic procedure that utilizes the patient’s own
              platelets to trigger cell proliferation, speed healing, and tissue
              regeneration in the treated area.
              <br />
              <br />
              Aside from being used to support wound healing in trauma and joint
              injury, this non-surgical treatment can enhance other cosmetic
              procedures for anti-aging (bringing a glow, smooth texture, and
              healthy plumpness), address male pattern baldness, and stimulate
              the growth of hair transplants.
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
                Have a realistic set of expectations for what the thread lift
                can accomplish.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Are physically healthy and have no underlying medical
                condition/s especially related to the blood, which can impact
                healing and overall quality of the result.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Briefly refrain from medication that thin the blood.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Eat a meal before procedure. This is to avoid lightheadedness
                especially since this therapy involves drawing blood.
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
              Patients must avoid washing the treatment area for at least 48
              hours. After that period, patients are free to use their hair and
              skin care products and continue with topical medications, if any.
              <br />
              <br />
              The treatment area may be sore for two or three days, and the
              patient may notice some bruising. In case of severe pain, the
              patient should notify the doctor’s office right away.
              <br />
              <br />
              Patients can expect results to be most noticeable after at least
              six months. Since these are not permanent, patients may require
              touch-up sessions at least once a year to retain any effect.
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
