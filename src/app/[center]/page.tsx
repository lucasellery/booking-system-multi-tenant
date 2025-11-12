import { CenterProvider } from "@/contexts/CenterContext";
import { CenterClient } from "./CenterClient";

type CenterProps = {
  center: string;
}

export default async function CenterPage({ params }: { params: Promise<CenterProps> }) {
  const { center } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-background p-8">
      <CenterProvider center={center}>
        <CenterClient />
      </CenterProvider>
    </div>
  );
}
