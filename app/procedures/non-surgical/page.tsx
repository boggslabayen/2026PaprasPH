import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";

const nonSurgicalTreatments = [
  {
    id: 1,
    treatmentName: "Botox",
    image: "/procedures/non-surgical/1.png",
    link: "",
  },
  {
    id: 2,
    treatmentName: "Thread Lifting",
    image: "/procedures/non-surgical/2.png",
    link: "",
  },
  {
    id: 3,
    treatmentName: "Fillers",
    image: "/procedures/non-surgical/3.png",
    link: "",
  },
  {
    id: 4,
    treatmentName: "Energy Devices",
    image: "/procedures/non-surgical/4.png",
    link: "",
  },
  {
    id: 5,
    treatmentName: "Platelet-Rich Plasma",
    image: "/procedures/non-surgical/5.png",
    link: "",
  },
];

function mapProcedures(params) {
  return (
    <div className="pb-8 " key={params.id}>
      <Link href={params.link}>
        <div>
          <Image
            src={params.image}
            width={432}
            height={285}
            alt={`image of ${params.treatmentName}`}
            className="w-full pb-4 rounded-md hover:border-2 hover:border-amber-500"
          />
        </div>

        <div>
          <h4
            className={`${manrope.className} font-bold text-sm md:text-lg text-center`}
          >
            {params.treatmentName}
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default function NonSurgical() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Non-Surgical Treatments
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          PAPRAS encourages learning and growth about the latest advancements in
          reconstructive and cosmetic plastic surgery procedures
        </p>
      </div>
      <div className="px-4 grid grid-cols-3 gap-4 md:max-w-3xl mx-auto pb-16">
        {nonSurgicalTreatments.map(mapProcedures)}
      </div>
    </section>
  );
}
