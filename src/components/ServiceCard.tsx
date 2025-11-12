"use client";

import { Service } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BookingDialog } from "./BookingDialog";

export function ServiceCard(service: Service) {
  return (
    <Card
      key={service.id}
      className="shadow-md rounded flex flex-col justify-between"
    >
      <CardHeader className="">
        <CardTitle className="text-xl font-black">{service.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <CardDescription className="text-xl font-serif font-bold text-zinc-200">
          $ {service.price}
        </CardDescription>

        <CardDescription>
          <p className="text-base text-zinc-800 dark:text-foreground font-lights">
            Duration: {service.duration} min
          </p>
        </CardDescription>

        <CardDescription>
          {service.description && (
            <p className="text-base text-justify">
              {service.description}
            </p>
          )}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <BookingDialog />
      </CardFooter>
    </Card>
  );
}
