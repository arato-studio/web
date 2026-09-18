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
        id="pricing"
        className="flex flex-col flex-wrap justify-center items-center gap-4"
      >
        <h2 className="text-2xl md:text-4xl text-center">Estimasi Biaya</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.services.map((service, index) => (
            <li
              key={index}
              className="p-2 rounded-sm border-4 bg-background-3 border-background-1 shadow-xs flex flex-col flex-wrap justify-between space-y-2"
            >
              <article className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest px-2 bg-background-1 border-background-2 border-4 rounded-xs size-fit">
                  {service.category}
                </div>
                <h3 className="text-xl md:text-2xl text-foreground-bright">
                  {service.item}
                </h3>
                <div className="text-xs text-subtle">{service.for}</div>
                <p className="pl-2 border-l-2 ml-2 text-gold text-sm text-shadow-xs">
                  {service.description}
                </p>
              </article>

              <section className="flex flex-col flex-wrap items-end justify-center gap-2">
                Mulai
                <div className="text-2xl md:text-4xl font-bold text-c-green text-center">
                  {service.price}
                </div>
                <a
                  href={
                    profile.links.find(
                      (link) => link.label.toLowerCase() === "whatsapp",
                    )?.to
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-c-green text-black p-2 font-bold uppercase text-center rounded-sm tracking-widest shadow-xs border-4 dark:border-white"
                >
                  <span className="text-shadow-xs text-center flex gap-2 items-center justify-center">
                    <Icon icon="mdi:whatsapp" />
                    Pesan Paket Ini
                  </span>
                </a>
              </section>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="team"
        className="flex flex-col flex-wrap gap-4 items-center justify-center min-h-192"
      >
        <h2 className="text-xl md:text-2xl text-center shadow-xs">
          Tim di Organisasi Kami
        </h2>
        <ul className="flex gap-4 flex-wrap items-center justify-center">
          {profile.members.map((member) => {
            return (
              <li
                key={member.github}
                className="border-background-1 bg-background-3 rounded-sm border-4 shadow-xs"
              >
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-col-reverse flex flex-wrap p-2"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon icon="mdi:github" />
                    <h3 className="text-center text-primary font-bold">
                      {member.name}
                    </h3>
                  </span>
                  <img
                    src={`${member.github}.png`}
                    className="min-w-32 max-w-32 min-h-32 max-h-32 rounded-sm border-4 border-primary"
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
