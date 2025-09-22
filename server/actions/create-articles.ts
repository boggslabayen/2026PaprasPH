'use server'

import { ArticleSchema } from "@/types/articles-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { articles } from "../schema";

const action = createSafeActionClient();

export const createArticle = action
.inputSchema(ArticleSchema)
.action(async({ parsedInput }) => {
    const { description, title, id } = parsedInput;
    if(id){
        const currentArticle = await db.query.articles.findFirst({
            where: eq(articles.id,id),
        })
        if(!currentArticle) return {error: 'Article not found'}
        const editedArticle = await db
        .update(articles)
        .set({description,title})
        .where(eq(articles.id,id)).returning();
        return { success: `Article ${editedArticle[0].title} has been created`}
    } 
    if(!id){
        const newArticle =await db.insert(articles).values({description,title}).returning();
        return { success: `Article ${newArticle[0].title} has been created`}
    }

    
})