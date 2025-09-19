import { Sidebar } from "@/components/dashboard/sidebar";
import { auth } from "@/server/auth";
import { ThemeProvider } from "@material-tailwind/react";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {session ? <Sidebar /> : null}
          {children}
        </div>
      </body>
    </html>
  );
}
