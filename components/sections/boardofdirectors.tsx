import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";

const board = [
  {
    id: 1,
    image: "/docs/bod/1.png",
    name: "Gene Gerald SJ Tiongco, MD",
    role: "President",
  },
  {
    id: 2,
    image: "/docs/bod/2.png",
    name: "Ma. Arlene C. Cala-or, MD",
    role: "VP for Internal Affairs",
  },
  {
    id: 3,
    image: "/docs/bod/3.png",
    name: "Christopher P. Aro, MD",
    role: "VP for External Affairs",
  },
  {
    id: 4,
    image: "/docs/bod/4.png",
    name: "Lora Mae A. De Guzman, MD",
    role: "Secretary",
  },
  {
    id: 5,
    image: "/docs/bod/5.png",
    name: "Angela Rose Hernandez, MD",
    role: "Treasurer",
  },
  {
    id: 6,
    image: "/docs/bod/6.png",
    name: "Fremont G. Base, MD",
    role: "P.R.O.",
  },
  {
    id: 7,
    image: "/docs/bod/7.png",
    name: "Gerald  M. Abesamis, MD",
    role: "President",
  },
  {
    id: 8,
    image: "/docs/bod/8.png",
    name: "Brian C. Ang, MD",
    role: "Director",
  },
  {
    id: 9,
    image: "/docs/bod/9.png",
    name: "Vicente Q. Firmalo, MD",
    role: "Director",
  },
  {
    id: 10,
    image: "/docs/bod/10.png",
    name: "Alexandra  Tan-Gayos, MD",
    role: "Director",
  },
  {
    id: 11,
    image: "/docs/bod/11.png",
    name: "Jeffrey V. Wong, MD",
    role: "Director",
  },
  {
    id: 12,
    image: "/docs/bod/12.png",
    name: "Benjamin G. Herbosa, MD",
    role: "Immediate Past President",
  },
];

function BoardAvatar(board) {
  return (
    <div key={board.id} className="flex flex-col items-center">
      <div className="">
        <Avatar
          src={board.image}
          alt={`avatar of ${board.name}`}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
      <div className="px-2">
        <h3
          className={`text-center ${manrope.className} font-bold text-sm h-10 mt-4`}
        >
          {board.name}
        </h3>
        <p className={`text-center ${manrope.className}  text-xs`}>
          {board.role}
        </p>
      </div>
    </div>
  );
}

export default function BoardSnippet() {
  return (
    <section className="max-w-3xl mx-auto my-40">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          PAPRAS Officers
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {" "}
        {board.map(BoardAvatar)}
      </div>
    </section>
  );
}
