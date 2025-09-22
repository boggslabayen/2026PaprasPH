"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { deleteArticle } from "@/server/actions/delete-article";
import Link from "next/link";

type ArticleColumn = {
  title: string;
  image: string;
  id: number;
};

async function deleteArticleWrapper(id: number) {
  const data = await deleteArticle({ id });
  if (!data) {
    return new Error("No data found");
  }
  if (data.data?.success) {
    console.log(data.data.success);
    toast.success("Successfully Deleted");
  }
  if (data.data?.error) {
    toast.error(data.data.error);
  }
}

export const columns: ColumnDef<ArticleColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const cellImage = row.getValue("image") as string;
      return (
        <div className="">
          <Image
            src={cellImage}
            alt="Article Image"
            width={50}
            height={50}
            className="rounded-md"
          />
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const article = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="h-8 w-8 p-0 cursor-pointer">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white border-0">
            <DropdownMenuItem className="hover:bg-black hover:text-amber-50 cursor-pointer">
              <Link
                href={`/dashboard/articles/create-article?id=${article.id}`}
              >
                Edit Article
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => deleteArticleWrapper(article.id)}
              className="hover:bg-black hover:text-amber-50 cursor-pointer"
            >
              Delete Article
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
