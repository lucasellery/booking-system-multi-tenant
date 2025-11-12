import z from "zod/v3";

export const bookingFormSchema = z.object({
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