import { CenterClient } from "./CenterClient";

type CenterProps = {
  center: string;
}

export default async function CenterPage({ params }: { params: CenterProps }) {
  const { center } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-background p-8">
      <CenterClient center={center} />
    </div>
  );
}
