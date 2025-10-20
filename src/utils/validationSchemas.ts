import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email es requerido"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .min(1, "Contraseña es requerida"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .min(1, "Nombre es requerido"),
    email: z.string().email("Email inválido").min(1, "Email es requerido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .min(1, "Contraseña es requerida"),
    confirmPassword: z
      .string()
      .min(1, "Confirmación de contraseña es requerida"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
