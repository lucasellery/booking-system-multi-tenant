import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Booking } from "@/types";
import { AlarmClock, Calendar } from "lucide-react";
import { LastBookingItem } from "./LastBookingItem";

export function LastBookingBanner({ center }: { center: string }) {
  const [bookings] = useLocalStorage<Booking[]>(`bookings-${center}`, []);

  if (bookings.length === 0) return null;

  return (
    <div className="space-y-10">
      <h1 className="text-center text-3xl font-black mt-12 md:mt-24">
        Reservations
      </h1>
      <div className="flex flex-row justify-between gap-4">
        {bookings.map((book: Booking) => (
          <LastBookingItem key={book.id} bookItem={book} />
        ))}
      </div>
    </div>
  );
}
