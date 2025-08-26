import { auth } from "@/server/auth";
import Image from "next/image";
import { UserButton } from "./user-button";
import Link from "next/link";

export default async function DashboardNav() {
  const session = await auth();

  return (
    <header className="bg-gray-50 p-4">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Image
              src="/next.svg"
              alt="Logo"
              width={100}
              height={50}
              className="h-4 w-auto"
            />
          </li>
          {!session ? (
            <li>
              <Link
                href="/auth/login"
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <UserButton user={session?.user} expires={session?.expires} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
