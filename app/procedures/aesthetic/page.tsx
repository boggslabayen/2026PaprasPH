import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";

const aestheticTreatments = [
  {
    id: 1,
    treatmentName: "Rhinoplasty",
    image: "/procedures/aesthetic/1.png",
    link: "/procedures/aesthetic/rhinoplasty",
  },
  {
    id: 2,
    treatmentName: "Breast Augmentation",
    image: "/procedures/aesthetic/2.png",
    link: "/procedures/aesthetic/breastaugmentation",
  },
  {
    id: 3,
    treatmentName: "Liposuction",
    image: "/procedures/aesthetic/3.png",
    link: "/procedures/aesthetic/liposuction",
  },
  {
    id: 4,
    treatmentName: "Facelift",
    image: "/procedures/aesthetic/4.png",
    link: "/procedures/aesthetic/facelift",
  },
  {
    id: 5,
    treatmentName: "Blepharoplasty",
    image: "/procedures/aesthetic/5.png",
    link: "/procedures/aesthetic/blepharoplasty",
  },
  {
    id: 6,
    treatmentName: "Abdominoplasty",
    image: "/procedures/aesthetic/6.png",
    link: "/procedures/aesthetic/abdominoplasty",
  },
  {
    id: 7,
    treatmentName: "Arm Lift / Thigh Lift",
    image: "/procedures/aesthetic/7.png",
    link: "/procedures/aesthetic/armlift",
  },
  {
    id: 8,
    treatmentName: "Gluteal Augmentation",
    image: "/procedures/aesthetic/8.png",
    link: "/procedures/aesthetic/gluteal",
  },
  {
    id: 9,
    treatmentName: "Labiaplasty",
    image: "/procedures/aesthetic/9.png",
    link: "/procedures/aesthetic/labiaplasty",
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

export default function AestheticSurgery() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Aesthetic Surgery
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          These involve various procedures that focus on enhancing and improving
          the aesthetic appearance of a particular area of the face or body
          through surgical procedures.
        </p>
      </div>
      <div className="px-4 grid grid-cols-3 gap-4 md:max-w-3xl mx-auto pb-16">
        {aestheticTreatments.map(mapProcedures)}
      </div>
    </section>
  );
}
