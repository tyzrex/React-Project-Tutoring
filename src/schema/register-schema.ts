import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Please enter a valid email",
      }),
    fullName: z
      .string({
        required_error: "Full Name is required",
      })
      .min(3, {
        message: "Full Name must be at least 3 characters",
      }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8),
    confirmPassword: z
      .string({
        required_error: "Password is required",
      })
      .min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
