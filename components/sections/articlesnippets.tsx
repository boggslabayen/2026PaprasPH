import Image from "next/image";

import { manrope, roboto } from "@/app/ui/fonts/fonts";
import { getManyArticles } from "@/server/actions/get-many-articles"; // your DB fetch
import { Button } from "../ui/button";
import Link from "next/link";
import truncate from "html-truncate";

export default async function ArticleSnippet() {
  const articles = await getManyArticles(); // fetch all articles from DB

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

      {"success" in articles && Array.isArray(articles.success) ? (
        articles.success.slice(0, 3).map((article: any) => (
          <div
            className="flex gap-4 max-w-3xl mx-auto mb-16 px-8 md:px-0"
            key={article.id}
          >
            {/* Article Image */}
            <div className="relative w-1/3 overflow-hidden h-40 bg-amber-400 rounded-md">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="rounded-lg object-cover object-center "
                sizes="100vw"
              />
            </div>

            {/* Article Text */}
            <div className="w-2/3 flex flex-col gap-2 justify-between">
              <div className="h-2/3">
                <h4 className={`${manrope.className} font-bold text-lg pb-0`}>
                  {article.title}
                </h4>
                <p className={`${roboto.className} mb-2`}>
                  {article.created.toLocaleDateString()}
                </p>

                <div
                  className={`${roboto.className} mb-4 overflow-hidden`}
                  dangerouslySetInnerHTML={{
                    __html: truncate(
                      article.articleBody ?? article.description ?? "",
                      100
                    ),
                  }}
                />
              </div>

              <div className="h-1/3 flex items-center">
                <Link href={`/articles/${article.id}`}>
                  <Button className=" px-8 rounded-full bg-amber-300 hover:bg-black hover:text-amber-500 hover:cursor-pointer">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-red-500 mb-8">
          {articles.error ?? "Failed to load articles."}
        </div>
      )}

      <div className="mx-auto text-center">
        <Link href={"/articles"}>
          {" "}
          <Button className="rounded-full px-8 bg-amber-300  hover:bg-black hover:text-amber-500 hover:cursor-pointer">
            Explore more articles
          </Button>
        </Link>
      </div>
    </section>
  );
}
