"use client";

import Image from "next/image";

const clients = [
  { name: "МИК", logo: "/logos/client-logo-mik.jpg" },
  { name: "ВТБ", logo: "/logos/client-logo-vtb.png" },
  { name: "Газпром нефть", logo: "/logos/client-logo-gazprom.png" },
  { name: "МГИМО Ventures", logo: "/logos/client-logo-mgimo.jpg" },
  { name: "Stellar", logo: "/logos/client-logo-stellar.avif" },
  { name: "Cosmos Hotel Group", logo: "/logos/client-logo-cosmos.webp" },
  { name: "Альфа-Банк", logo: "/logos/client-logo-alfa.webp" },
  { name: "Большая Разведка", logo: "/logos/client-logo-razvedka.png" },
];

const tripled = [...clients, ...clients, ...clients];

export default function ClientsMarquee() {
  return (
    <section className="py-12 bg-[#010101]">
      <div className="marquee-container">
        <div className="marquee-track">
          {tripled.map((client, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={40}
                className="h-[40px] w-auto object-contain brightness-0 invert opacity-60"
              />
              <span className="text-white/40 text-sm whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
