"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function TraumaCraniofacial() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/reconstructive/5.png"}
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
              Trauma Craniofacial Surgery
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              A type of reconstructive surgery, this aims to restore facial
              structure and neural integrity to patients with varying severities
              of complex trauma to the face, and cranium. This type of procedure
              requires highly specialized attention due to the capricious and
              unpredictable healing process of our intricate facial features.
              <br />
              <br />
              Different cases are addressed with their corresponding treatments.
              Depending on the impacted areas, our options for reconstruction
              include (but are not limited to):
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Autogenous (split-calvarial) bone and grafts from native sources
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Metal or synthetic plates
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Meshes
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Wires and screws
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Oculoplastic solutions
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Fat, skin, and soft tissue transfers
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
              Especially at the time of the trauma, when other time-crucial
              concerns have already been treated, you will meet with your
              surgeon(s) to determine the initial repairs. This will set the
              foundation for succeeding procedures if necessary.
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
              No matter the severity of the case, we want to remind our patients
              that they will go through a complex healing process which will
              naturally occur in several stages. Patience and persistence are
              highly vital during postoperative care and the following
              individualized treatments.
              <br />
              <br />
              Your surgeon(s) will be closely monitoring your status, including
              your response to the procedures, to make effective adjustments to
              your treatment plan. You will be advised to take note and inform
              your surgeon(s) of anything unusual while self-caring at home.
              <br />
              <br />
              The healing process may take at least a full year to complete.
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
