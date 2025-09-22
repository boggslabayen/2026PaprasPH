import { db } from "@/server";
import imgplaceholder from "@/public/imgplaceholder.svg";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";

export default async function ArticlesPage() {
  const articles = await db.query.articles.findMany({
    orderBy: (articles, { desc }) => [desc(articles.id)],
  });
  if (!articles) throw new Error("No articles found");

  const dataTable = articles.map((article) => {
    return {
      id: article.id,
      title: article.title,
      image: imgplaceholder.src,
    };
  });
  if (!dataTable) throw new Error("No data found");
  return (
    <div className="w-full p-4">
      <a href="/dashboard/articles/create-article">
        <Button
          variant="default"
          className="bg-amber-500 hover:bg-black hover:text-amber-500 mb-8"
        >
          Add New Article
        </Button>
      </a>
      <DataTable columns={columns} data={dataTable} />
    </div>
  );
}
