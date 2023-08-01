import Image from "next/image";
import * as React from "react";
import "@/styles/globals.css";

export default function Header() {
  return (
    <div className="py-5 container mx-auto">
      <Image
        src="/galaxy-logo-mobile.png"
        loading="eager"
        priority={true}
        quality={90}
        alt="Galaxy Cinema"
        width={115}
        height={60}
        className="max-w-min w-[77px] h-[40px] lg:w-[115px] lg:h-[60px]"
      />
    </div>
  );
}
