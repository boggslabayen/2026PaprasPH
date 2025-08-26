import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="md:flex bg-amber-50 p-16 justify-between">
        <div className="md:w-1/2 pb-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Papras Logo"
              width={337}
              height={88}
              className="max-w-40"
            />
          </Link>
          <p className="font-roboto text-sm text-gray-600 md:w-5/6">
            Philippine Association of Plastic, Reconstructive and Aesthetic
            Surgeons
          </p>
        </div>

        <div className="flex gap-8 md:w-1/2 md:justify-end">
          <div className="md:w-1/3">
            <p className="font-bold font-roboto text-sm pb-4">Location</p>
            <p className="font-roboto text-sm text-gray-600">
              3rd Floor Philippine College of Surgeons (PCS) Building, 992 EDSA
              Quezon City, 1005
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="font-bold font-roboto text-sm pb-4">Contact Us</p>
            <p className="font-roboto text-sm text-gray-600">+63 234561238</p>
            <p className="font-roboto text-sm text-gray-600">
              papras.website@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
