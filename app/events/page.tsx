import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";

export default function Events() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <div className="mb-4">
        <h1 className={`${manrope.className} font-bold text-3xl mb-2`}>
          UPCOMING IMCAS EVENTS
        </h1>
      </div>
      <div className="relative w-full h-[40vh] overflow-hidden rounded-md mb-8">
        <Image
          src="/banner2.png"
          alt="IMCAS ACADEMY"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div
        className={`${roboto.className} prose prose-lg max-w-none text-lg leading-relaxed`}
      >
        <Link
          href="https://www.imcas.com/en/academy"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          IMCAS World Congress 2026
        </Link>
        <p>
          Join the IMCAS World Congress in Paris from January 29 to 31, 2026,
          where leading experts in plastic surgery, and aesthetic science gather
          to exchange insights and innovations. Experience cutting-edge
          lectures, live demonstrations, and networking opportunities that shape
          the future of aesthetic medicine.
        </p>
      </div>
    </section>
  );
}
