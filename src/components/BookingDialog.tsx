import { useForm, Controller } from "react-hook-form";
import z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CardContent } from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { bookingFormSchema } from "@/schema/bookingFormSchema";
import { BookingConfirmation } from "./BookingConfirmation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Booking } from "@/types";

export function BookingDialog() {
  const [openDialog, setOpenDialog] = useState(false);
  const [bookings, setBookings] = useLocalStorage<Booking[]>("bookings", []);

  const { handleSubmit, control, reset } = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      date: new Date(),
      time: "00:00",
    },
    mode: "onTouched",
  });

  function onSubmit(data: z.infer<typeof bookingFormSchema>) {
    const newBooking = {
      // eslint-disable-next-line react-hooks/purity
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    setBookings((prev: Booking[]) => [...prev, newBooking]);

    toast.success("Booking confirmed!", {
      description: (
        <BookingConfirmation date={data.date} email={data.email} name={data.name} time={data.time}  />
      ),
      classNames: {
        content: "flex flex-col gap-1",
      },
      position: "top-right",
      closeButton: true,
      duration: 5000,
    });

    setOpenDialog(false);
    reset();
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="mt-4 w-full rounded place-self-end-safe">Book</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader color="">
          <DialogTitle>Book your service</DialogTitle>
          <DialogDescription>
            Fill the fields bellow and book your service now
          </DialogDescription>
        </DialogHeader>

        <form id="book-service-form" onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <FieldGroup>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-book-name">Your name</FieldLabel>
                    <Input
                      {...field}
                      id="form-book-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter full name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-book-email">
                      Your Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-book-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your best Email"
                      autoComplete="off"
                      type="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="date"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-book-date">Date</FieldLabel>
                    <Input
                      {...field}
                      id="form-book-date"
                      aria-invalid={fieldState.invalid}
                      placeholder="Schedule a date"
                      autoComplete="off"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={
                        field.value instanceof Date
                          ? field.value.toISOString().split("T")[0]
                          : field.value
                      }
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="time"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-book-time">Time</FieldLabel>
                    <Input
                      {...field}
                      id="form-book-time"
                      aria-invalid={fieldState.invalid}
                      placeholder="Set a Time"
                      autoComplete="off"
                      type="time"
                      step="1"
                      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </CardContent>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
