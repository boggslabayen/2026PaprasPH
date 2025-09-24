"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function MicroSurgery() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/reconstructive/7.png"}
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
              Microsurgery: Free Tissue Transfer
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-0 text-justify`}
            >
              Free Tissue Transfer is one technique for micro reconstruction
              surgery that aims to repair the space left in your body after a
              tumor is removed. In simple terms, tissue is transferred from one
              part of your body (called as the donor site), to the area that
              needs reconstruction (recipient site).
              <br />
              <br />
              Once your primary surgeon deems the tumor and the affected bone(s)
              and soft tissue(s) are fully removed, your reconstructive surgeon
              will take what we call a ‘free flap.’ This refers to any block of
              skin, tissue, muscle, or bone from the donor site which will be
              attached to the recipient site. A microscope will be used to
              connect the tiny blood vessels in
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl mx-auto py-0">
          <p
            className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
          >
            the free flap with the blood vessels at the recipient site. This is
            done with thin sutures. In cases when a vein is needed to integrate
            the free flap into the recipient site, your surgeon will make a
            small incision on a donor site - usually from your arm or leg. Other
            scenarios would require a skin graft (taken from your buttock or
            thigh) to cover your donor and/or recipient site. Skin grafts are
            often done as well for post-burn treatment.
            <br />
            <br />
            Please be reminded that all cases are unique. Microsurgery is
            something that can be done in different ways.
          </p>
          <div className="px-4 md:px-0">
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              Preparation
            </h3>
            <ol>
              <li className="list-decimal list-inside mb-2">
                After all tumors and high priority concerns have been resolved,
                you will have a consultation with your reconstruction surgeon.
                You will be advised about your next steps for your treatment
                plan.
                <ol className="py-4 list-[lower-alpha] list-inside px-8">
                  <li className="pb-4">
                    {" "}
                    You may be recommended to have a medical clearance visit to
                    lower potential risks pertinent to the reconstructive
                    surgery as much as possible.
                  </li>
                  <li className="pb-4">
                    {" "}
                    You may undergo tests for your:
                    <ul className="list-disc list-inside">
                      <li>Heart</li>
                      <li>Lungs</li>
                      <li>Blood vessels in your legs (through an angiogram)</li>
                    </ul>
                  </li>
                  <li className="pb-2">
                    {" "}
                    You may also advised to have other tests like:
                    <ul className="list-disc list-inside">
                      <li>Computed Tomography (CT) scan</li>
                      <li>Magnetic Resonance Imaging (MRI)</li>
                      <li>X-rays</li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li className="list-decimal list-inside mb-4">
                Consultation with other specialists may be required based on the
                area that will undergo the reconstructive surgery.
              </li>

              <li className="list-decimal list-inside mb-4">
                Be honest with your surgeon about your alcohol and smoking
                habits. These are two factors that may cause complications
                during and after the surgery. In this way, your surgeon will be
                able to help you if you’re unable to stop right away for risk of
                withdrawal.
              </li>
            </ol>
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
              treatment area to prevent any complications. The following week
              after the surgery, swelling and pain may be experienced which
              should naturally go away over time.
              <br />
              <br />
              Post-care instruction will also vary depending on the area(s) that
              was treated. Your surgeon will be providing your personalized
              self-care guidelines. Be sure to ask if anything is unclear.
            </p>
          </div>

          <div className="px-4 md:px-0">
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              Setting Expectations
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Reconstructive surgeries often come with both temporary and
              permanent changes. It’s important that you are well aware of
              possible outcomes such as changes in your:
            </p>
            <ol className="list-decimal list-inside">
              <li className="pb-2">
                <span className="font-bold">Appearance -</span> You may have
                scarring at the donor and/or recipient sites. The free flap may
                be a different color than your surrounding skin.
              </li>

              <li className="pb-2">
                <span className="font-bold">Lifestyle - </span> Some things you
                can do before the surgery may no longer be possible. This is
                dependent on where the flap is located.
              </li>

              <li className="pb-2">
                <span className="font-bold">
                  Ability to swallow or eat some types of foods.
                </span>{" "}
              </li>

              <li className="pb-2">
                <span className="font-bold">Speech,</span> if your surgery was
                done in your mouth.
              </li>

              <li className="pb-2">
                <span className="font-bold">Ability to speak,</span> if your
                surgery was done on your voice box.
              </li>

              <li className="pb-2">
                <span className="font-bold">
                  Sensation on the skin at your surgical sites.
                </span>{" "}
                These will improve over time, but they may always feel more numb
                than your untreated skin.
              </li>
            </ol>
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
