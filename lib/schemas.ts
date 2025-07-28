import * as z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    inquiry: z
        .enum(["General query", "Website development", "UX/UI design", "Data Analysis", "Creative and content production", "3D animation", "Business process service"])
        .refine((val) => val !== undefined, {
            message: "Please select an inquiry type",
        }),
    message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
