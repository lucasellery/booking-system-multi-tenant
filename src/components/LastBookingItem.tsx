import { Booking } from "@/types";
import { AlarmClock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type LastBookingItemProps = {
  bookItem: Booking;
};

export function LastBookingItem({ bookItem }: LastBookingItemProps) {
  return (
    <Card>
      <CardHeader className="text-start">
        <CardTitle className="text-xl font-bold -mb-4">
          {bookItem?.name}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-row items-center gap-2">
          <Calendar size={16} />
          <b>{new Date(bookItem?.date).toLocaleDateString()}</b>{" "}
        </div>
        <div className="flex flex-row items-center gap-2">
          <AlarmClock size={16} />
          <b>{bookItem?.time.slice(0, -3)}</b>{" "}
        </div>
      </CardContent>
    </Card>
  );
}
