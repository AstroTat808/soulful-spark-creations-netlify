"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Soulful Spark Creations logo" width={48} height={48} />
          <span className="font-medium">Soulful Spark Creations</span>
        </div>
        <p className="text-sm text-gray-600">
          We&apos;re open late and always creating — thanks for being here.
        </p>
      </div>
    </footer>
  );
}
