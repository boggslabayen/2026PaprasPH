"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function BurnSurgery() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/reconstructive/4.png"}
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
              Burn Surgery
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              Following a serious burn, plastic and reconstructive surgery is
              considered to aid your healing process by providing cosmetic
              benefits and preventing further deformities and contractures. It
              is advisable to wait a year after the injury since most scars
              incurred from burns fade over time.
              <br />
              <br />
              Depending on your specific needs, many procedural options are
              available:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                <span className="font-bold">Tissue expansion</span>, in which a
                tissue expander is filled with fluid over time to promote new
                skin growth, is placed in the area where new skin is needed.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                <span className="font-bold">Skin grafts</span>, in which healthy
                skin is taken to be transplanted to the treatment area.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                <span className="font-bold">Skin flaps</span>, in which muscle,
                skin, or bone is transplanted with the original blood supply to
                the treatment area.
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
              Healing time will vary depending on the type of procedure
              performed and is best determined by your surgeon. We recommend our
              patients to rest and take it easy during this time to prevent
              swelling or complications.
              <br />
              <br />
              Individualized postoperative instructions will be provided,
              including the recommendation for compression garments if
              applicable, to avoid unnecessary movement and infection of the
              affected areas.
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
              Child patients may be unable to eat or drink normally following
              the procedure. During this time, intravenous feeding may be
              recommended by your PAPRAS surgeon. It is very important that
              parents strictly adhere to the feeding guidelines provided by
              doctors following the surgery to avoid any possible risks or
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
