"use client";

import { manrope, roboto } from "@/app/ui/fonts/fonts";
import BecomeAMember from "@/components/sections/becomember";
import BoardSnippet from "@/components/sections/boardofdirectors";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="max-w-3xl mx-auto">
        <section className="mx-auto justify-center items-center px-8 md:px-4 pt-10">
          <div>
            <Image
              src={"/docs/board.png"}
              width={432}
              height={285}
              alt="aesthetic image"
              className="w-full pb-4 rounded-md"
            />
          </div>
          <div>
            <p className={`${roboto.className} font-light text-lg`}>
              About PAPRAS
            </p>
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              Leaders in the field of aesthetic and reconstructive surgery in
              the Philippines
            </h3>
          </div>
          <div>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              The Philippine Association of Plastic, Reconstructive and
              Aesthetic Surgeons, or PAPRAS had its humble beginnings on March
              22, 1961. It was founded by eight renowned plastic surgeons,
              trained internationally across America and Europe.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              Driven by their desire to pursue and sustain the practice of
              Plastic Surgery in the country, the society approved the creation
              of the Philippine Board of Plastic Surgery in 1971.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              The PAPRAS has become more active and relevant in recent years,
              establishing residency programs across the nation; helping train
              competent and highly-skilled surgeons to meet the growing trends
              in the fields of aesthetic and reconstructive plastic surgery.
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              Today, the society has rightfully assumed its role as the key
              opinion leader as far as cosmetic and reconstructive surgery
              issues in the country are concerned, disseminating relevant
              information to the public thru print and broadcast media.  It has
              also continued to serve the underserved public sectors thru its
              numerous plastic surgical missions and outreach programs. 
            </p>

            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              The PAPRAS has likewise stamped its class in the international
              front thru its members who have either been actively participating
              in international meetings or have become active in international
              organizations, gaining international accolades in various
              international congresses over the years.
            </p>
          </div>
        </section>

        <section className="my-16">
          <div className="flex flex-col md:flex-row content-center gap-4 max-w-3xl mx-auto py-8 items-center">
            <div className="w-2/5">
              <Image
                src={"/docs/Mission.png"}
                width={656}
                height={498}
                alt="Doctors in pose"
                className=""
              />
            </div>
            <div className="w-3/5 px-2">
              <p className={`${roboto.className} font-light text-lg`}>
                Our Mission
              </p>
              <h3
                className={`${manrope.className} font-black text-xl md:text-2xl mb-4 `}
              >
                The Philippine Association of Plastic Reconstructive and
                Aesthetic Surgeons aims to encourage and support its members in
                providing the highest quality of patient care; and to maintain
                the highest possible ethical standards in the practice of the
                profession.
              </h3>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-3xl mx-auto text-center">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
            >
              The PAPRAS C.A.R.E
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
            >
              Choosing the right surgeon for your needs matters. We encourage
              patients to research on their doctors and look for the following
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={"/docs/care/c.png"}
                  width={200}
                  height={200}
                  alt="letter c"
                  className="w-1/2 justify-self-center"
                />
                <div>
                  <h4
                    className={`text-center ${manrope.className} font-bold text-lg`}
                  >
                    Certified
                  </h4>
                  <p className={`text-center ${manrope.className}  text-md`}>
                    Is the doctor board-certified?
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Image
                  src={"/docs/care/a.png"}
                  width={200}
                  height={200}
                  alt="letter a"
                  className="w-1/2 justify-self-center"
                />
                <div>
                  <h4
                    className={`text-center ${manrope.className} font-bold text-lg `}
                  >
                    Accredited
                  </h4>
                  <p className={`text-center ${manrope.className}  text-md`}>
                    Are his/her facilities backed up by an official license and
                    accreditation?
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Image
                  src={"/docs/care/r.png"}
                  width={200}
                  height={200}
                  alt="letter a"
                  className="w-1/2 justify-self-center"
                />
                <div>
                  <h4
                    className={`text-center ${manrope.className} font-bold text-lg`}
                  >
                    Responsible
                  </h4>
                  <p className={`text-center ${manrope.className}  text-md`}>
                    Does he/she evoke sense of duty, takes full responsibility
                    of your well-being?
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 ">
                <Image
                  src={"/docs/care/e.png"}
                  width={200}
                  height={200}
                  alt="letter a"
                  className="w-1/2 justify-self-center"
                />
                <div>
                  <h4
                    className={`text-center ${manrope.className} font-bold text-lg`}
                  >
                    Ethical
                  </h4>
                  <p className={`text-center ${manrope.className}  text-md`}>
                    Is the Doctor’s practice grounded on proper and ethical
                    procedures?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <BoardSnippet />
      <BecomeAMember />
    </main>
  );
}
