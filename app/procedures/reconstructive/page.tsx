import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";

const reconstructiveTreatments = [
  {
    id: 1,
    treatmentName: "Cleft Lip and Palate Repair",
    image: "/procedures/reconstructive/1.png",
    link: "",
  },
  {
    id: 2,
    treatmentName: "Breast Reconstruction",
    image: "/procedures/reconstructive/2.png",
    link: "",
  },
  {
    id: 3,
    treatmentName: "Skin Cancer",
    image: "/procedures/reconstructive/3.png",
    link: "",
  },
  {
    id: 4,
    treatmentName: "Burn Surgery",
    image: "/procedures/reconstructive/4.png",
    link: "",
  },
  {
    id: 5,
    treatmentName: "Trauma Craniofacial Surgery",
    image: "/procedures/reconstructive/5.png",
    link: "",
  },
  {
    id: 6,
    treatmentName: "Congenital Craniofacial Surgery",
    image: "/procedures/reconstructive/6.png",
    link: "",
  },
  {
    id: 7,
    treatmentName: "Microsurgery and Free Tissue Transfer",
    image: "/procedures/reconstructive/7.png",
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

export default function ReconstructiveProcedures() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Reconstructive Surgery
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          These procedures are generally done to correct any kind of deformity
          with the goal to restore an acceptable balance between function and
          form.
        </p>
      </div>
      <div className="px-4 grid grid-cols-3 gap-4 md:max-w-3xl mx-auto pb-16">
        {reconstructiveTreatments.map(mapProcedures)}
      </div>
    </section>
  );
}
