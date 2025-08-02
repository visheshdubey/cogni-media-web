"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";

const inquiryOptions = [
    "General query",
    "Website development",
    "UX/UI design",
    "Data Analysis",
    "Creative and content production",
    "3D animation",
    "Business process service",
] as const;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            inquiry: undefined,
            message: "",
        },
    });

    async function onSubmit(data: ContactFormData) {
        setIsSubmitting(true);
        try {
            // Here you would typically send the data to your API
            console.log("Form data:", data);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Reset form on success
            form.reset();
            alert("Thank you for your message! We'll get back to you soon.");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error sending your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" {...form.register("name")} className="w-full" />
                    {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" {...form.register("email")} className="w-full" />
                        {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" {...form.register("phone")} className="w-full" />
                        {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
                    </div>
                </div>

                {/* Inquiry Dropdown */}
                <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select
                        onValueChange={(value) => {
                            form.setValue("inquiry", value as ContactFormData["inquiry"]);
                            form.trigger("inquiry");
                        }}
                        value={form.watch("inquiry")}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                            {inquiryOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {form.formState.errors.inquiry && <p className="text-sm text-red-500">{form.formState.errors.inquiry.message}</p>}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." {...form.register("message")} className="w-full h-24" />
                    {form.formState.errors.message && <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>}
                </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
