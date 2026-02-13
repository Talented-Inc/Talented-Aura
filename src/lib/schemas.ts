import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    role: z.string().min(2, "Job title is required"),
});

export const companySchema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    website: z.string().url("Valid URL required (https://...)").optional().or(z.literal("")),
    annualVolume: z.string().min(1, "Please select an estimated volume"),
    projectType: z.enum(["New Build", "Renovation", "Rebranding", "Replenishment"]),
});

export const detailsSchema = z.object({
    interests: z.array(z.string()).min(1, "Select at least one category"),
    message: z.string().optional(),
    sampleRequest: z.boolean(),
});

// Combined schema for final submission
export const rfqSchema = contactSchema.merge(companySchema).merge(detailsSchema);

export type RFQFormData = z.infer<typeof rfqSchema>;
