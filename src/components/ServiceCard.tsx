"use client";

import { Service } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BookingDialog } from "./BookingDialog";

export function ServiceCard(service: Service) {
  return (
    <Card key={service.id} className="shadow-md rounded">
      <CardHeader className="">
        <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
        <CardDescription className="text-lg font-serif font-bold text-zinc-200">
          $ {service.price}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-base text-zinc-800 dark:text-foreground font-lights">
          Duration: {service.duration} min
        </p>
        {service.description && (
          <p className="text-base text-gray-500">{service.description}</p>
        )}
        {/* <Button className="mt-4 w-full rounded">Book</Button> */}
        <BookingDialog />
      </CardContent>
    </Card>
  );
}
