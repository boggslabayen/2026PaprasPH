"use client";

import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Image from "next/image";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Button } from "@material-tailwind/react";

const article = [
  {
    id: 1,
    title: "Mommy Makeover",
    articleBody:
      "Motherhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
  {
    id: 2,
    title: "Daddy Makeover",
    articleBody:
      "Daddyhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
  {
    id: 3,
    title: "Baby Makeover",
    articleBody:
      "Babyhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
  {
    id: 4,
    title: "Sister Makeover",
    articleBody:
      "Sisterhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
  {
    id: 5,
    title: "Borther Makeover",
    articleBody:
      "Brotherhood is one of the most important milestones in a woman’s life. This exciting milestone comes with many changes. As a woman advances in age, she may have more wrinkles on her face, saginess on her lower arm, or stretch marks on the abdomen, legs, and hips. However, these changes can be addressed through aesthetic procedures which we can call a Mommy Makeover.",
  },
];

function ArticleCard(article: {
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
  articleBody: string;
}) {
  return (
    <div
      className="md:grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16 px-8 md:px-0"
      key={article.id}
    >
      <div className="">
        <Image
          src={"/docs/AboutImage.png"}
          width={656}
          height={498}
          alt="Doctors in pose"
          className="h-full pb-8 md:pb-0 rounded-lg"
        />
      </div>

      <div className="col-span-2">
        <h4 className={`${manrope.className} font-bold text-lg pb-4`}>
          {article.title}
        </h4>
        <p className={`${roboto.className} mb-4`}>
          {article.articleBody.slice(0, 150) + "..."}
        </p>
        <Button
          variant={"outlined"}
          className={`rounded-full ${roboto.className} bg-none border-1 border-black hover:bg-amber-400 hover:text-black hover:border-0 px-8 py-4`}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
//

export default function ArticleSnippet() {
  return (
    <section className="my-8">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3
          className={`${manrope.className} font-black text-2xl md:text-3xl mb-6`}
        >
          ARTICLES
        </h3>
        <p
          className={`${roboto.className} text-black text-base md:text-lg leading-relaxed mb-16`}
        >
          Stay updated on the latest in Philippine plastic, reconstructive, and
          aesthetic surgery with our monthly articles and expert insights.
        </p>
      </div>

      {article.slice(0, 3).map(ArticleCard)}

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
          Explore More Articles
        </Button>
      </div>
    </section>
  );
}
