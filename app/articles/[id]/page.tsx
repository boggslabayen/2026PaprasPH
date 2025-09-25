import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import { getArticle } from "@/server/actions/get-articles"; // your DB fetch

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await getArticle(Number(id));

  if (!article || article.error) return <p>Article not found</p>;

  const { title, image, description, created } = article.success;

  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <div className="mb-4">
        <h1 className={`${manrope.className} font-bold text-3xl mb-2`}>
          {title}
        </h1>
        <p className={`${roboto.className} text-lg leading-relaxed`}>
          {created.toLocaleDateString()}
        </p>
      </div>
      <div className="relative w-full h-[40vh] overflow-hidden rounded-md mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        className={`${roboto.className} prose prose-lg max-w-none text-lg leading-relaxed`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
}
