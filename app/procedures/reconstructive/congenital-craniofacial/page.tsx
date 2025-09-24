"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function CongenitalCraniofacial() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap-2 max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/reconstructive/6.png"}
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
              Congenital Craniofacial Surgery
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-8 text-justify`}
            >
              This is a field of surgery that deals with the face’s structural
              foundations through alteration of the facial skeleton.
              <br />
              <br />
              This procedure is commonly for those who are born with congenital
              abnormalities or those with abnormalities on the bones, muscles,
              and other tissues of the face and cranium upon birth.
              <br />
              <br />
              This is comprised of several surgical procedures which are
              treatments for a wide range of common syndromes:
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl mx-auto py-0">
          <div className="md:flex justify-around">
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Aperts syndrome
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Cleft lip and cleft palate
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Craniosynostosis
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Craniofacial trauma
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Crouzon's syndrome
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Facial and jaw tumors
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Hemifacial Microsomia
              </li>
            </ul>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                Jaw deformities
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Orbital Hypertelorism
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Orbital Dystopia
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Plagiocephaly (Flat Head Syndrome)
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Pierre Robin syndrome
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Tessier Facial Clefts
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                Treacher Collins Syndrome
              </li>
            </ul>
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
              Your initial consultation will be to determine the treatment plan
              appropriate for your child. It is normal for you to be treated by
              several surgeons which may include neurosurgeons, ophthalmic (eye)
              and oculoplastic (eye socket and associated structures) surgeons,
              oral and maxillofacial (jaw and face) surgeons, and otolaryngology
              (head and neck) surgeons.
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
              No matter the severity of the case, we want to remind the parents
              and guardians that the healing process is especially complex for
              younger patients since they are still in the development stage.
              Patience and persistence are highly vital during postoperative
              care and the following individualized treatments.
              <br />
              <br />
              Your surgeon(s) will be closely monitoring the patient’s status,
              including their response to the procedures, to make effective
              adjustments to their treatment plan. Patients or their guardians
              will be advised to take note and inform their surgeon(s) of
              anything unusual while self-caring at home.
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
