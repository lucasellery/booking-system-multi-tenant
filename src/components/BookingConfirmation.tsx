import { bookingFormSchema } from "@/schema/bookingFormSchema";
import z from "zod/v3";

export function BookingConfirmation(data: z.infer<typeof bookingFormSchema>) {
  return (
    <div className="mt-2 text-sm leading-relaxed">
      <p className="font-medium text-foreground">
        Thank you, <span className="font-semibold">{data.name}</span>!
      </p>
      <p>
        Your booking has been scheduled for{" "}
        <span className="font-semibold">
          {data.date.toLocaleDateString()} at {data.time}
        </span>
        .
      </p>
      <p className="text-muted mt-1">
        A confirmation will be send to{" "}
        <span className="font-medium">{data.email}</span>.
      </p>
    </div>
  );
}
