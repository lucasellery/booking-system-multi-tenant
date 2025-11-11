"use client";

import { CenterData } from "@/types";
import Image from "next/image";
import { ButtonSection } from "./ButtonSection";

type HeaderProps = {
  centerData: CenterData;
};

export function Header({ centerData }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-14 space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center gap-0">
        {centerData.logo && (
          <Image
            src={centerData.logo}
            alt={`${centerData.name} logo`}
            width={100}
            height={100}
          />
        )}
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-3xl font-semibold">{centerData.name}</h1>
          <p className="text-ring max-w-xl">{centerData.slogan}</p>
        </div>
      </div>

      <ButtonSection/>
    </header>
  );
}
