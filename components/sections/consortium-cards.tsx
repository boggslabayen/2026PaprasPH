import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Image from "next/image";

const programs = [
  {
    id: 1,
    name: "De La Salle University Medical Center",
    image: "/docs/00TrainingProg/1.png",
  },
  {
    id: 2,
    name: "Dr. Paulino J. Garcia Memorial Research and Medical Center",
    image: "/docs/00TrainingProg/2.png",
  },
  {
    id: 3,
    name: "Philippine General Hospital",
    image: "/docs/00TrainingProg/3.png",
  },
  {
    id: 4,
    name: "Southern Philippines Medical Center",
    image: "/docs/00TrainingProg/4.png",
  },
  {
    id: 5,
    name: "The Medical City",
    image: "/docs/00TrainingProg/5.png",
  },
  {
    id: 6,
    name: "University of Santo Tomas Hospital",
    image: "/docs/00TrainingProg/6.png",
  },
  {
    id: 7,
    name: "Vicente Sotto Memorial Medical Center",
    image: "/docs/00TrainingProg/7.png",
  },
];

const consortium1arr = [
  {
    id: 1,
    name: "East Avenue Medical Center",
    image: "/docs/00Cons1/1.png",
  },
  {
    id: 2,
    name: "Makati Medical Center",
    image: "/docs/00Cons1/2.png",
  },
  {
    id: 3,
    name: "Rizal Medical Center",
    image: "/docs/00Cons1/3.png",
  },
  {
    id: 4,
    name: "Ramon Magsaysay Memorial Medical Center",
    image: "/docs/00Cons1/4.png",
  },
  {
    id: 5,
    name: "Veterans Memorial Medical Center",
    image: "/docs/00Cons1/5.png",
  },
];

const consortium2arr = [
  {
    id: 1,
    name: "Dr. Nicanor Reyes Medical Foundation",
    image: "/docs/00Cons2/1.png",
  },
  {
    id: 2,
    name: "Jose R. Reyes Memorial Medical Center",
    image: "/docs/00Cons2/2.png",
  },
  {
    id: 3,
    name: "Quirino Memorial Medical Center",
    image: "/docs/00Cons2/3.png",
  },
  {
    id: 4,
    name: "St. Luke’s Medical Center",
    image: "/docs/00Cons2/4.png",
  },
];

function mapPrograms(params) {
  return (
    <div className="pb-8" key={params.id}>
      <div>
        <Image
          src={params.image}
          width={432}
          height={285}
          alt="event image"
          className="w-full pb-8 rounded-md"
        />
      </div>

      <div>
        <h4 className={`${manrope.className} font-bold text-sm text-center`}>
          {params.name}
        </h4>
      </div>
    </div>
  );
}

export function TrainingPrograms() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Training Programs
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          PAPRAS encourages learning and growth about the latest advancements in
          reconstructive and cosmetic plastic surgery procedures
        </p>
      </div>
      <div className="px-4 grid grid-cols-3 gap-4 md:max-w-3xl mx-auto pb-16">
        {programs.map(mapPrograms)}
      </div>
    </section>
  );
}

export function Consortium1() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Consortium I
        </h3>
      </div>
      <div className="px-4 grid grid-cols-3 gap-4 md:max-w-3xl mx-auto pb-16">
        {consortium1arr.map(mapPrograms)}
      </div>
    </section>
  );
}

export function Consortium2() {
  return (
    <section className="my-20">
      <div className="max-w-3xl mx-auto text-center">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Consortium II
        </h3>
      </div>
      <div className="px-4 grid grid-cols-3 gap-4 md:max-w-3xl mx-auto pb-16">
        {consortium2arr.map(mapPrograms)}
      </div>
    </section>
  );
}
