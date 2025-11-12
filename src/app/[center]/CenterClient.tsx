"use client";

import { useCenterData } from "@/hooks/useCenterData";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { notFound } from "next/navigation";
import { CenterSkeleton } from "@/components/CenterSkeleton";
import { LastBookingBanner } from "@/components/LastBookingBanner";
import { Footer } from "@/components/Footer";
import { useCenter } from "@/contexts/CenterContext";

export function CenterClient() {
  const { center } = useCenter();
  const { data: centerData, isLoading, isError } = useCenterData(center);

  if (isError) return notFound();
  if (isLoading) return <CenterSkeleton />;
  if (!centerData) return notFound();

  return (
    <>
      <Header centerData={centerData} />
      <HeroSection centerData={centerData} />

      <div className="md:px-12 mt-12 md:mt-24 space-y-10 flex flex-col items-center">
        <h2 className="text-center text-3xl font-black">Our Services</h2>
        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl"
        >
          {centerData.services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>

      <div className="mt-6 mx-auto">
        <LastBookingBanner center={center} />
      </div>

      <Footer />
    </>
  );
}
