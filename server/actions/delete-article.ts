'use server'

import { createSafeActionClient } from "next-safe-action";
import * as z from "zod";
import { db } from "..";
import { articles } from "../schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const action = createSafeActionClient();

export const deleteArticle = action
.inputSchema(z.object({ id: z.number() }))
.action(async ({ parsedInput }) => {
    const { id } = parsedInput;
    try {
        // Your delete logic here
        const data = await db
        .delete(articles)
        .where(eq(articles.id,id))
        .returning()
        revalidatePath("/dashboard/articles")
        return { success: `Article ${data[0].title} has been deleted`}
    } catch (error) {
        // Handle error
        return{ error: "Failed to delete article"}
    }
})