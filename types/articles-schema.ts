import { title } from "process";
import * as z from "zod";

export const ArticleSchema = z.object({
    id: z.number().optional(),
    image: z.optional(z.string()),
    title: z.string().min(5,{
        message: "Title must be at least 5 characters long"
    }),
    description: z.string().min(40,{
        message: "Article myst be at least 40 characters long"
    }),
}) 

export type zArticleSchema = z.infer<typeof ArticleSchema> 