import Image from "next/image";
import { roboto, manrope } from "./ui/fonts/fonts";
import AboutPapras from "@/components/sections/aboutpapras";
import BecomeAMember from "@/components/sections/becomember";
import EventSnippet from "@/components/sections/eventsnippets";
import ArticleSnippet from "@/components/sections/articlesnippets";
import PatientEducatioSnippet from "@/components/sections/patienteducationsnip";

export default function Home() {
  return (
    <main>
      <div className="md:flex mx-auto justify-center items-center md:px-4 pt-40">
        <div className="max-w-2xl mx-4">
          <div>
            <h1
              className={`${manrope.className} text-4xl md:text-6xl font-black mb-8`}
            >
              The Philippine Association of Plastic Reconstructive and Aesthetic
              Surgeons
            </h1>
            <h3 className={`${roboto.className} text-lg md:text-xl pb-8`}>
              The leader in the field of aesthetic and reconstructive surgery in
              the Philippines
            </h3>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/education/BannerImage.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="hidden md:block w-80"
          />
        </div>
      </div>

      <PatientEducatioSnippet />
      <AboutPapras />
      <BecomeAMember />
      {/* <EventSnippet /> */}
      <ArticleSnippet />
    </main>
  );
}
