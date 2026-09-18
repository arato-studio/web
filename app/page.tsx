import Link from "next/link";
import { profile } from "./data/profile";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-16"
      >
        <h2 className="text-3xl relative text-center text-balance text-shadow-xs tracking-wide text-shadow-primary md:text-6xl mt-32">
          <div className="absolute -top-12 -left-8 bg-background-1-invert/10 min-h-96 min-w-screen -z-5" />
          Bikin{" "}
          <b>
            <i>Brand</i> Kamu
          </b>{" "}
          Tampil Beda Lewat Website & Video <b>Profesional</b>.
        </h2>

        <p className="max-w-prose border-l-muted tracking-wider border-l-0 pl-0 text-shadow-xs md:text-xl mb-32 text-foreground-bright">
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
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.links.map((link) => {
              return (
                <li
                  key={link.label}
                  className={`${link.style} font-bold rounded-sm`}
                >
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 min-w-48 justify-between min-h-16 text-inherit tracking-widest text-xl"
                  >
                    <Icon icon={link.icon} className="text-2xl" />
                    <span className="text-center flex-1">{link.label}</span>
                  </a>
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
