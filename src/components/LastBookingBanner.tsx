import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Booking } from "@/types";

export function LastBookingBanner({ center }: { center: string }) {
  const [bookings] = useLocalStorage("bookings", []);
  const lastBooking: Booking = bookings[bookings.length - 1];

  if (!lastBooking) return null;

  return (
    <div className="bg-muted text-foreground p-4 rounded-lg mb-6 text-sm">
      <p>
        <b>{lastBooking.name}</b>, you last booked a service on{" "}
        <b>
          {new Date(lastBooking.date).toLocaleDateString()} at{" "}
          {lastBooking.time}
        </b>
        .
      </p>
    </div>
  );
}
