import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

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

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  email: z
    .string()
    .email("Please enter a valid email.")
    .min(5, "Email must be at least 5 characters.")
    .max(100, "Email must be at most 100 characters."),
  date: z.date(),
  time: z.string(),
});

export function BookingDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: new Date(),
      time: "10:30",
    },
    mode: "onTouched",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.success("Booking confirmed!", {
      description: (
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
          <p className="text-muted-foreground mt-1">
            A confirmation will be send to{" "}
            <span className="font-medium">{data.email}</span>.
          </p>
        </div>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-1",
      },
      duration: 5000,
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 w-full rounded">Book</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader color="">
          <DialogTitle>Book your service</DialogTitle>
          <DialogDescription>
            Fill the fields bellow and book your service now
          </DialogDescription>
        </DialogHeader>

        <form id="book-service-form" onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
                control={form.control}
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
