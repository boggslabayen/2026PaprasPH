import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import {
  Consortium1,
  Consortium2,
  TrainingPrograms,
} from "@/components/sections/consortium-cards";
import Link from "next/link";

export default function Member() {
  return (
    <main>
      <section>
        <section className="my-8 ">
          <div className="md:flex items-center content-center gap-2 max-w-4xl mx-auto py-8">
            <div className="md:w-2/3">
              <Image
                src={"/docs/requirements/member.png"}
                width={656}
                height={498}
                alt="Doctors in pose"
                className="h-full pb-8 md:pb-0"
              />
            </div>
            <div className="md:w-3/5 px-8 md:px-0">
              <p className={`${roboto.className} font-light text-lg`}>
                Become a PAPRAS Member
              </p>
              <h3
                className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
              >
                Shaping the Future of Philippine Plastic Surgery
              </h3>
              <p
                className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
              >
                Join PAPRAS and be part of a community dedicated to advancing
                excellence, innovation, and integrity in Philippine plastic,
                reconstructive, and aesthetic surgery.
              </p>
            </div>
          </div>
        </section>
        <div className="max-w-3xl mx-auto">
          <section>
            <div className="max-w-3xl mx-auto text-center">
              <h3
                className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
              >
                Requirements
              </h3>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={"/docs/requirements/1.png"}
                    width={200}
                    height={200}
                    alt="letter c"
                    className="w-1/2 justify-self-center"
                  />
                  <div>
                    <p className={`text-center ${manrope.className}  text-sm`}>
                      Successfully completed a minimum of 3 years of General
                      Surgery training.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={"/docs/requirements/2.png"}
                    width={200}
                    height={200}
                    alt="letter a"
                    className="w-1/2 justify-self-center"
                  />
                  <div>
                    <p className={`text-center ${manrope.className}  text-sm`}>
                      Undertook 3 years of Plastic Surgery training at an
                      accredited institution.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={"/docs/requirements/3.png"}
                    width={200}
                    height={200}
                    alt="letter a"
                    className="w-1/2 justify-self-center"
                  />
                  <div>
                    <p className={`text-center ${manrope.className}  text-sm`}>
                      Passed both the oral and written examinations administered
                      by the Philippine Board of Plastic Surgery (PBPS) after
                      completing training.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 ">
                  <Image
                    src={"/docs/requirements/4.png"}
                    width={200}
                    height={200}
                    alt="letter a"
                    className="w-1/2 justify-self-center"
                  />
                  <div>
                    <p className={`text-center ${manrope.className}  text-sm`}>
                      Eligible board passers can become PAPRAS Fellows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <TrainingPrograms />
        <Consortium1 />
        <Consortium2 />
      </section>
    </main>
  );
}
