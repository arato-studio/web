import profile_picture from "@/public/profile.webp";
const github_url = "https://github.com";

export const profile = {
  name: "ARATO Studio",
  bio: "Edit Video, Buat Website.",
  picture: profile_picture,

  links: [
    {
      label: "WhatsApp",
      icon: "mdi:whatsapp",
      to: "https://wa.me/6285261230455",
      style: "border-4 bg-c-green text-black dark:border-white",
    },
    {
      label: "Instagram",
      icon: "mdi:instagram",
      to: "https://www.instagram.com/arato_studio2026",
      style: "border-4 text-foreground-bright border-love bg-love",
    },
    {
      label: "GitHub",
      icon: "simple-icons:github",
      to: "https://github.com/arato-studio",
      style: "bg-white text-black",
    },
    {
      label: "Email",
      icon: "lucide:mail",
      to: "mailto:aratostudio2026@gmail.com",
      style: "bg-black text-white",
    },
  ],

  services: [
    {
      category: "Buat Presentasi",
      item: "Presentasi Basic",
      for: "Siswa / Mahasiswa / Guru / Dosen",
      price: "Rp20k",
      description: "10 slide (slide ke-11+ dicharge 1k/slide)",
    },
    {
      category: "Buat Presentasi",
      item: "Presentasi Custom",
      for: "Siswa / Mahasiswa / Guru / Dosen",
      price: "Rp30k/slide",
      description: "10 slide (slide ke-11+ dicharge 2k/slide)",
    },

    {
      category: "Edit Video",
      item: "Video Basic",
      for: "Reels / TikTok / Shorts",
      price: "Rp3k–6k",
      description: "Rp3k–6k/menit (Cut, transisi, subtitle)",
    },
    {
      category: "Edit Video",
      item: "Video Pro",
      for: "Reels / TikTok / Shorts",
      price: "Rp7k–12k",
      description:
        "Rp7k–12k menit (fitur basic + color-grading, sound effect, dan efek visual)",
    },
    {
      category: "Buat Website",
      item: "Portfolio / Bio Link",
      price: "~Rp35k",
    },
    {
      category: "Buat Website",
      item: "Landing UMKM",
      price: "~Rp50k",
    },
  ],

  members: [
    {
      github: `${github_url}/arieeksm`,
      name: "Arie",
    },
    {
      github: `${github_url}/axelmychro`,
      name: "Axel",
    },
    {
      github: `${github_url}/ToraEleazarTarigan-251401037`,
      name: "Tora",
    },
  ],
};
