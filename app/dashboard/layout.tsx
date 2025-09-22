import { Sidebar } from "@/components/dashboard/sidebar";
import { auth } from "@/server/auth";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex">
          {session ? <Sidebar /> : null}
          {children}
        </div>
      </body>
    </html>
  );
}
