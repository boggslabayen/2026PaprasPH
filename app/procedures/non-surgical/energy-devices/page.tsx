"use client";

import Image from "next/image";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function EnergyDevices() {
  return (
    <main>
      <section className="mt-8 px-4">
        <div className="flex flex-col md:flex-row content-center gap- max-w-4xl mx-auto py-8">
          <div className="w-full md:w-1/2">
            <Image
              src={"/procedures/non-surgical/4.png"}
              width={400}
              height={400}
              alt="Image of abdominoplasty"
              className="pb-8 md:pb-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3
              className={`${manrope.className} font-black text-2xl md:text-3xl mb-4`}
            >
              Energy Devices
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed mb-4 text-justify`}
            >
              What used to be an approach that invoked fear for people who are
              looking for ways to bring back their plump, youthful glow has now
              become something almost as ordinary as buying skincare products
              from boutiques. For aesthetic-enthusiasts, cosmetic treatments and
              surgeries are now looked forward to as a self-care gift. It’s
              turned into something that is no longer exclusive to movie
              superstars and the glamorously rich.
              <br />
              <br />
              Energy-based devices in recent years have become more and more
              affordable. Especially in the metro, you can find that small
              clinics also provide these services. Sessions can go as low as
              P269, which means no wallets need to be broken to undergo this
              procedure even if they have to go back many times to see results.
              Additionally, energy devices have surfaced on ecommerce (like
              Shopee and Lazada) which makes it possible for you to do it
              without shelling out every session. It is likely that you might
              have undergone a treatment like this without knowing it is in fact
              a type of cosmetic surgery.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-4xl mx-auto py-0">
          <div className="px-4 md:px-0">
            <h3
              className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
            >
              What is it
            </h3>
            <p
              className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
            >
              Energy Devices are instruments that emit energy such as high
              frequencies, ultrasonic waves, or microwaves. They are modern day
              tools for non-invasive, minimal-to-no-downtime facelifts. Each
              device type’s energy varies in their wavelength and how they
              interact with living tissue (your skin). As such, each device has
              an appropriate time for use depending on the patient’s desired
              outcome. Some of the more common devices include the ff:
            </p>
            <ul>
              <li className="list-disc list-inside pb-4 text-justify">
                <span className="text-bold">Radiofrequency (RF) Therapy -</span>{" "}
                Also known as ‘Radiofrequency Skin Tightening,’ RF waves tighten
                your sagging skin by heating the deep layer of your skin to
                between 122°F and 167°F (50–75°C). Studies have shown that
                maintaining a temperature over 115°F (46°C) for over 3 minutes
                causes your body to release heat-shock proteins. These proteins
                stimulate your body to create new collagen fibers. This is
                relatively painless save for the heat which can be adjusted
                based on your tolerance level.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                <span className="text-bold">
                  High-intensity Focused Ultrasound (HIFU) -
                </span>{" "}
                A new cosmetic treatment for skin tightening. Some consider this
                a painless and non-invasive replacement for surgical face lifts.
                This device utilizes ultrasound energy to encourage the
                production of collagen which results in firmer skin.
              </li>

              <li className="list-disc list-inside pb-4 text-justify">
                <span className="text-bold">Laser Skin Resurfacing -</span> Also
                known as ‘laser peel,’ ‘laser vaporization,’ and ‘lasabrasion.’
                This device can reduce facial wrinkles, scars and blemishes. An
                ever-developing technology, new models nowadays give your
                plastic surgeon a new level of control for extreme permission in
                targeting even your most delicate areas.
              </li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto py-0">
            <div className="px-4 md:px-0">
              <h3
                className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
              >
                Preparation
              </h3>
              <p
                className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
              >
                While Energy Device-based treatments are non-invasive, some
                reminders are still given to interested patients:
              </p>
              <ol>
                <li className="list-decimal list-inside pb-4 text-justify">
                  Make sure to get adequate sleep the night before your
                  treatment.
                </li>

                <li className="list-decimal list-inside pb-4 text-justify">
                  Do not wear any makeup on the day of your treatment.
                </li>

                <li className="list-decimal list-inside pb-4 text-justify">
                  Depending on your treatment, you may receive topical
                  anesthesia.
                </li>
              </ol>
            </div>

            <div className="px-4 md:px-0">
              <h3
                className={`${manrope.className} font-black text-xl md:text-2xl mb-4`}
              >
                Healing and Recovery
              </h3>
              <p
                className={`${roboto.className} text-black text-base md:text-md leading-relaxed pb-4 text-justify`}
              >
                A common instruction for people who underwent this type of
                surgery is to keep your treated areas from being wet for at
                least 8 hours after the treatment. You may also be given topical
                ointments (such as hydrocortisone) when needed.
                <br />
                <br />
                Additional instructions (such as putting on sunscreen, avoiding
                sweating, etc.) and setting of expectations vary on the
                treatment that you have. Some cases have little to no downtime,
                others can take up to 2 weeks before complete recovery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center max-w-4xl mx-auto py-8">
        <Link href={"/procedures/non-surgical"}>
          <Button
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant="outlined"
            className="px-8 rounded-full bg-amber-300 border-0 hover:bg-black hover:text-amber-300"
          >
            View More Non-surgical Procedures
          </Button>
        </Link>
      </section>
    </main>
  );
}
