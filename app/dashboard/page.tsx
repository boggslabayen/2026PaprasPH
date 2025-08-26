import DashboardNav from "@/components/dashboard/dashboard-nav";

export default function Dashboard() {
  return (
    <>
      <DashboardNav />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
        {/* Additional dashboard content can be added here */}
      </main>
    </>
  );
}
