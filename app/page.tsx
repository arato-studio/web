import Link from "next/link";
import { profile } from "./data/profile";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 max-w-prose">
        <h2 className="text-2xl text-center text-balance text-shadow-xs tracking-wide text-shadow-primary md:text-4xl">
          Bikin{" "}
          <b>
            <i>Brand</i> Kamu
          </b>{" "}
          Tampil Beda Lewat Website & Video <b>Profesional</b>.
        </h2>

        <p className="max-w-md text-balance border-l-muted tracking-wider border-l-4 pl-4 text-shadow-xs text-shadow-primary md:text-xl">
          Kami bantu UMKM dan kreator ngembangin kehadiran digital lewat desain
          web modern dan editing video yang memikat.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-8 not-md:max-w-prose">
        <h2 className="text-xl text-center text-balance text-shadow-xs tracking-wide text-shadow-primary md:text-2xl">
          Mau jasa cepat, atau proyek jangka panjang?
        </h2>
        <p className="text-balance tracking-wider text-shadow-xs text-shadow-primary md:text-xl">
          Hubungi kami:
        </p>
        <ul className="flex gap-4 flex-wrap not-md:max-w-xs">
          {profile.links.map((link) => {
            return (
              <li
                key={link.label}
                className={`${link.style} font-bold flex items-center justify-center rounded-xs flex-1 shadow-xs`}
              >
                <Link
                  href={link.to}
                  className="flex items-center gap-4 p-2 min-w-48 justify-center min-h-16 text-inherit tracking-widest text-xl"
                >
                  <Icon icon={link.icon} className="text-2xl" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
