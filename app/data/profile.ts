import profile_picture from "@/public/profile.webp";

export const profile = {
  name: "ARATO Studio",
  bio: "Edit Video, Buat Website.",
  picture: profile_picture,

  links: [
    {
      label: "WhatsApp",
      icon: "mdi:whatsapp",
      to: "https://wa.me/6285261230455",
      style: "border-4 bg-c-green text-foreground-bright text-2xl",
    },
    {
      label: "Instagram",
      icon: "mdi:instagram",
      to: "https://www.instagram.com/axelmychro",
      style: "border-4 border-love bg-love",
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
      to: "mailto:axelmychro@gmail.com",
      style: "bg-black text-white",
    },
  ],
};
