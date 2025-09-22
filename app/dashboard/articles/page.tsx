import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import ArticlesForm from "./articles-form";

export default async function ArticlesPage() {
  const session = await auth();
  if (session) {
    return <ArticlesForm />;
  } else if (!session) redirect("/auth/login");
}
