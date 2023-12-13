"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const links = [
    { name: "ABOUT", href: "/" },
    { name: "EXPERIENCE", href: "/experience" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <footer className="px-2 mt-8 text-xs font-semibold">
      <ul className="flex justify-between">
        {links.map((link, i) => {
          const active = pathname === link.href;
          return (
            <li key={link.name + i}>
              <Link
                href={link.href}
                className={`inline-block px-5 py-3 transition-all ease-in-out relative group ${
                  active ? "text-white" : "text-slate-600 hover:text-white"
                }`}
              >
                {link.name}
                <div
                  className={`absolute transition-all ease-in-out w-full bg-slate-600 rounded-t-lg bottom-0 left-0 -z-10 ${
                    active ? "h-full" : "h-[2px] group-hover:h-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
