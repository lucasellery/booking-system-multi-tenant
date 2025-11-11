import { notFound } from "next/navigation";
import { CenterData } from "@/types";
import { ServiceCard } from "@/components/ServiceCard";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/Hero";

const centersMock: Record<string, CenterData> = {
  center1: {
    name: "Beauty by Ana",
    logo: "/logo-glam.png",
    slogan: "Especialista em estética facial e corporal",
    description:
      "Beauty was established to be your travel companion so that you can reach the body of your dreams in the healthiest way and create time for yourself and your loved ones.",
    services: [
      {
        id: 1,
        name: "Limpeza de Pele",
        duration: 60,
        price: 120,
        description: "Tratamento facial completo para revitalizar a pele",
      },
      {
        id: 2,
        name: "Massagem Relaxante",
        duration: 45,
        price: 90,
        description: "Massagem com óleos essenciais para aliviar o estresse",
      },
      {
        id: 3,
        name: "Massagem Relaxante",
        duration: 45,
        price: 90,
        description: "Massagem com óleos essenciais para aliviar o estresse",
      },
      {
        id: 4,
        name: "Massagem Relaxante",
        duration: 45,
        price: 90,
        description: "Massagem com óleos essenciais para aliviar o estresse",
      },
    ],
  },
  center2: {
    name: "Studio Glam",
    logo: "/logo-glam.png",
    slogan: "Seu salão completo em um só lugar",
    description:
      "Studio Glam é seu destino completo para beleza e estilo. Oferecemos serviços profissionais de cabelo, coloração e tratamentos personalizados em um ambiente moderno e acolhedor. Transforme seu visual com nossa equipe de especialistas.",
    services: [
      {
        id: 1,
        name: "Corte Feminino",
        duration: 30,
        price: 80,
      },
      {
        id: 2,
        name: "Coloração",
        duration: 90,
        price: 150,
        description: "Tintura profissional para realçar seu estilo",
      },
    ],
  },
};

type PageProps = {
  params: Promise<{ center: string }>;
};

export default async function CenterPage({ params }: PageProps) {
  const { center } = await params;
  const centerData = centersMock[center];

  if (!centerData) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-background p-8">
      <Header centerData={centerData} />

      <HeroSection centerData={centerData} />

      <div className="md:px-12 mt-12 md:mt-24 space-y-10 flex flex-col items-center">
        <h2 className="text-center text-3xl font-black">Our Services</h2>

        <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {centerData.services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              duration={service.duration}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
