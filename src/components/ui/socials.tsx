import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const socials = [
  { icon: Github, url: "" },
  { icon: Linkedin, url: "" },
];
const Socials = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300 p-2 text-emerald-300 transition-all duration-500 hover:bg-emerald-300 hover:text-black/80"
        >
          <item.icon />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
