"use client";

import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CenterData } from "@/types";
import Image from "next/image";

type HeroSectionProps = {
  centerData: CenterData;
};

export function HeroSection({ centerData }: HeroSectionProps) {
  const scrollTo = useSmoothScroll();

  return (
    <div id="about-us" className="grid grid-cols-1 divide-y-reverse items-center md:grid-cols-2 text-center md:px-12">
      <div className="flex flex-col text-start space-y-10">
        <h3 className="text-5xl font-bold font-serif">{centerData.slogan}</h3>
        <p className="text-start text-lg">{centerData.description}</p>
        <Button onClick={() => scrollTo("services")} className="md:mt-6 mb-4 md:mb-0 md:w-1/2 rounded">
          Check our services
        </Button>
      </div>

      <div className="flex items-center justify-end">
        <Image src="/hair02.png" width={600} height={600} alt="hair image" />
      </div>
    </div>
  );
}
