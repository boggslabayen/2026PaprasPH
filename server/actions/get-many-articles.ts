'use server'

import { db } from ".."
import { articles } from "../schema"

export async function getManyArticles() {
  try {
    const allArticles = await db.query.articles.findMany({
      orderBy: (article, { desc }) => desc(article.id), // newest first
    })

    if (!allArticles || allArticles.length === 0)
      throw new Error("No articles found")

    return { success: allArticles }
  } catch (error) {
    return { error: "Failed to fetch articles" }
  }
}
