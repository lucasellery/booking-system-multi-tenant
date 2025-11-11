import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

type ButtonSectionProps = {
  onScroll: (id: string) => void;
}

export function ButtonSection() {
  const scrollTo = useSmoothScroll();

  return (
    <div className="flex items-center gap-x-5">
      <Button variant={"link"} className="" onClick={() => scrollTo("about-us")}>
        About Us
      </Button>
      <Button variant={"link"} className="" onClick={() => scrollTo("services")}>
        Services
      </Button>
    </div>
  );
}
