'use server'

import { eq } from "drizzle-orm"
import { db } from ".."
import { articles } from "../schema"

export async function getArticle(id:number) {
    try{
        const article = await db.query.articles.findFirst({
            where: eq(articles.id,id),
        })
        if(!article) throw new Error("Article not found")
        return {success: article}
    }catch(error){
        return {error: "Failed to find article"}
    }
}