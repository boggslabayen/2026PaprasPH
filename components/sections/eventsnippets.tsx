"use client";

import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const snippet = [
  {
    id: 1,
    title: "IMCAS ASIA 17th Edition",
    date: "June 21-24, 2025",
    description:
      "Motherhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
  {
    id: 2,
    title: "PAC Annual Conference",
    date: "Aug 08-24, 2025",
    description:
      "Motherhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
  {
    id: 3,
    title: "OSAPS Annual Conference",
    date: "Jul 08-24, 2023",
    description:
      "Motherhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },

  {
    id: 4,
    title: "PASOPS Annual Conference",
    date: "Jul 08-24, 2023",
    description:
      "Motherhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
];

function EventCard(snippet: {
  id: Key | null | undefined;
  title:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | ReactPortal
        | ReactElement<unknown, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
  date:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | ReactPortal
        | ReactElement<unknown, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
  description: string;
}) {
  return (
    <div className="pb-8" key={snippet.id}>
      <div>
        <Image
          src={"/upcoming/eventhumb1.png"}
          width={432}
          height={285}
          alt="event image"
          className="w-full pb-8 rounded-md"
        />
      </div>

      <div>
        <h4 className={`${manrope.className} font-bold text-md`}>
          {snippet.title}
        </h4>
        <p className={`${roboto.className} font-light mb-4`}>{snippet.date}</p>
        <p className={`${roboto.className}`}>
          {snippet.description.slice(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
}

export default function EventSnippet() {
  return (
    <section className="my-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          Upcoming Events
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-8`}
        >
          Stay updated on the latest events, workshops, conferences, and
          seminars designed to inspire and elevate your practice.
        </p>
      </div>

      <div className="px-4 md:grid md:grid-cols-3 md:gap-4 md:max-w-3xl mx-auto pb-16">
        {snippet.slice(0, 3).map(EventCard)}
      </div>

      <div className="mx-auto text-center">
        <Button
          variant={"outlined"}
          className={`rounded-full ${roboto.className} bg-amber-400  hover:bg-black hover:text-amber-500 px-8 py-4`}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          View More Events
        </Button>
      </div>
    </section>
  );
}
