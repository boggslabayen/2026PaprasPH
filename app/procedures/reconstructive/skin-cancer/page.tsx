"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function SkinCancer() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/reconstructive/3.png"}
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
              Skin Cancer
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              Skin cancer is characterized by the growth of harmful cancer cells
              in the body. If left untreated, this form of cancer may spread in
              other parts of the body and become life-threatening.
              <br />
              <br />
              Individuals with higher or extreme exposure to harmful ultraviolet
              (UV) light from the sun may also become susceptible to skin
              cancer.
              <br />
              <br />
              To mitigate the risk of skin cancer, patients who notice the
              development of unusual skin growth are advised to consult a
              specialist immediately.
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
              Diagnosis and Treatment
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              PAPRAS doctors are well-experienced medical professionals who can
              facilitate the diagnosis and treatment of skin cancer.
              <br />
              <br />
              Your PAPRAS doctor may recommend a biopsy if skin irregularities
              are suspected to be cancerous. This is a quick and easy procedure,
              typically performed under local anesthesia.
              <br />
              <br />
              Most skin cancers (especially in early stages) can easily be
              removed through surgery. If succeeding biopsies indicate no
              further trace of skin cancer, a patient need not undergo
              additional treatment. For larger infected areas, skin grafts or
              skin flaps may be recommended to repair the skin.
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
              Depending on the extent of the area that needs treatment, patients
              may be able to go home on the same day or a few days after the
              removal procedure.
              <br />
              <br />
              In some instances, patients may experience some swelling in the
              excision area. This is not an uncommon circumstance, and swelling
              may reduce in a matter of days.
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
