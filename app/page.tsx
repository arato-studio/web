import Link from "next/link";
import { profile } from "./data/profile";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-8 max-w-prose"
      >
        <h2 className="text-2xl text-center text-balance text-shadow-xs tracking-wide text-shadow-primary md:text-4xl">
          Bikin{" "}
          <b>
            <i>Brand</i> Kamu
          </b>{" "}
          Tampil Beda Lewat Website & Video <b>Profesional</b>.
        </h2>

        <p className="max-w-md  opacity-80 text-balance border-l-muted tracking-wider border-l-4 pl-4 text-shadow-xs text-shadow-primary md:text-xl">
          Kami bantu pelajar, kreator, dan UMKM ngembangin kehadiran digital
          lewat desain web modern dan editing video yang memikat.
        </p>

        <article className="flex flex-col items-center justify-center gap-8 not-md:max-w-prose">
          <h2 className="text-xl text-center text-balance text-shadow-xs tracking-wide text-shadow-primary md:text-2xl">
            Mau Jasa Cepat atau Proyek Jangka Panjang?
          </h2>
          <p className="text-balance tracking-wider text-shadow-xs text-shadow-primary md:text-xl">
            Hubungi kami:
          </p>
          <ul className="flex gap-4 flex-wrap not-md:max-w-xs">
            {profile.links.map((link) => {
              return (
                <li
                  key={link.label}
                  className={`${link.style} font-bold flex items-center justify-center rounded-sm flex-1 shadow-xs`}
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
        </article>
      </section>

      <section
        id="team"
        className="flex flex-col flex-wrap gap-4 items-center justify-center"
      >
        <h2 className="text-xl md:text-2xl text-center">
          Tim di Organisasi Kami
        </h2>
        <ul className="flex gap-4 flex-wrap items-center justify-center">
          {profile.members.map((member) => {
            return (
              <li
                key={member.github}
                className="bg-primary rounded-sm border-2"
              >
                <a
                  href={member.github}
                  className="flex-col-reverse flex flex-wrap p-2"
                >
                  <h3 className="text-center text-black font-bold">
                    {member.name}
                  </h3>
                  <img
                    src={`${member.github}.png`}
                    className="min-w-32 max-w-32 min-h-32 max-h-32 rounded-sm border-2 border-black"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
