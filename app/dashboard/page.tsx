import DashboardNav from "@/components/dashboard/dashboard-nav";
import { Sidebar } from "@/components/dashboard/sidebar";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  redirect("/dashboard/settings");
  return (
    <>
      <DashboardNav />
      {session ? <Sidebar /> : null}

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
        {/* Additional dashboard content can be added here */}
      </main>
    </>
  );
}
