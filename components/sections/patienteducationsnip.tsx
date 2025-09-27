"use client";

import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function PatientEducatioSnippet() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Patient Education
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          Discover the safe and advanced techniques of reconstructive and
          aesthetic plastic surgery for enhanced beauty and confidence.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <Link href={"/procedures/recons"}>
            <div>
              <Image
                src={"/education/aesthetic.png"}
                width={432}
                height={285}
                alt="aesthetic image"
                className="w-full pb-4 rounded-md"
              />
              <h4
                className={`text-center ${manrope.className} font-bold text-lg`}
              >
                Aesthetic
              </h4>
            </div>
          </Link>

          <Link href={"/procedures/aesthetic"}>
            <div>
              <Image
                src={"/education/image.png"}
                width={432}
                height={285}
                alt="aesthetic image"
                className="w-full pb-4 rounded-md"
              />
              <h4
                className={`text-center ${manrope.className} font-bold text-lg`}
              >
                Aesthetic
              </h4>
            </div>
          </Link>

          <Link href={"/procedures/non-surgical"}>
            <div>
              <Image
                src={"/education/reconstructive.png"}
                width={432}
                height={285}
                alt="aesthetic image"
                className="w-full pb-4 rounded-md"
              />
              <h4
                className={`text-center ${manrope.className} font-bold text-lg`}
              >
                Non-Surgical
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
