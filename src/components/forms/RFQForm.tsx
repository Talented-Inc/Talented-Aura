"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, companySchema, detailsSchema, rfqSchema, type RFQFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { categories } from "@/lib/data";

const steps = [
    { id: 1, name: "Contact", schema: contactSchema },
    { id: 2, name: "Company", schema: companySchema },
    { id: 3, name: "Details", schema: detailsSchema },
];

export function RFQForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<RFQFormData>({
        resolver: zodResolver(rfqSchema),
        mode: "onChange",
        defaultValues: {
            interests: [],
            sampleRequest: false,
        },
    });

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = form;

    const processForm = async (data: RFQFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form Submitted:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const nextStep = async () => {
        const fields = Object.keys(steps[currentStep - 1].schema.shape);
        const output = await trigger(fields as unknown as (keyof RFQFormData)[]); // cleaner cast than 'any'

        if (output) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-900 border border-primary/20 p-12 text-center rounded-sm"
            >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                </div>
                <h2 className="text-3xl font-serif text-white mb-4">Request Received</h2>
                <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                    Thank you for your interest in Aura. Our procurement team will review your specifications and contact you within 24 hours.
                </p>
                <Button onClick={() => window.location.href = "/"} variant="outline">
                    Return Home
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between mb-2">
                    {steps.map((step) => (
                        <span
                            key={step.id}
                            className={`text-xs uppercase tracking-widest ${currentStep >= step.id ? 'text-primary' : 'text-neutral-600'}`}
                        >
                            {step.name}
                        </span>
                    ))}
                </div>
                <div className="h-[2px] bg-neutral-800 w-full relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit(processForm)} className="space-y-6">
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm text-neutral-400">First Name</label>
                                    <input
                                        id="firstName"
                                        {...register("firstName")}
                                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                        placeholder="Jane"
                                    />
                                    {errors.firstName && <span className="text-destructive text-xs">{errors.firstName.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm text-neutral-400">Last Name</label>
                                    <input
                                        id="lastName"
                                        {...register("lastName")}
                                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <span className="text-destructive text-xs">{errors.lastName.message}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm text-neutral-400">Work Email</label>
                                <input
                                    id="email"
                                    {...register("email")}
                                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                    placeholder="jane@hotel-group.com"
                                />
                                {errors.email && <span className="text-destructive text-xs">{errors.email.message}</span>}
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm text-neutral-400">Phone</label>
                                    <input
                                        id="phone"
                                        {...register("phone")}
                                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    {errors.phone && <span className="text-destructive text-xs">{errors.phone.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="role" className="text-sm text-neutral-400">Job Title</label>
                                    <input
                                        id="role"
                                        {...register("role")}
                                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                        placeholder="Procurement Director"
                                    />
                                    {errors.role && <span className="text-destructive text-xs">{errors.role.message}</span>}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label htmlFor="companyName" className="text-sm text-neutral-400">Company Name</label>
                                <input
                                    id="companyName"
                                    {...register("companyName")}
                                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                    placeholder="Acme Hospitality Group"
                                />
                                {errors.companyName && <span className="text-destructive text-xs">{errors.companyName.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="website" className="text-sm text-neutral-400">Website (Optional)</label>
                                <input
                                    id="website"
                                    {...register("website")}
                                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors"
                                    placeholder="https://"
                                />
                                {errors.website && <span className="text-destructive text-xs">{errors.website.message}</span>}
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="annualVolume" className="text-sm text-neutral-400">Annual Volume (Units)</label>
                                    <select
                                        id="annualVolume"
                                        {...register("annualVolume")}
                                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors appearance-none"
                                    >
                                        <option value="">Select Volume</option>
                                        <option value="<10k">Less than 10k</option>
                                        <option value="10k-50k">10k - 50k</option>
                                        <option value="50k-100k">50k - 100k</option>
                                        <option value="100k+">100k+</option>
                                    </select>
                                    {errors.annualVolume && <span className="text-destructive text-xs">{errors.annualVolume.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="projectType" className="text-sm text-neutral-400">Project Type</label>
                                    <select
                                        id="projectType"
                                        {...register("projectType")}
                                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors appearance-none"
                                    >
                                        <option value="New Build">New Build</option>
                                        <option value="Renovation">Renovation</option>
                                        <option value="Rebranding">Rebranding</option>
                                        <option value="Replenishment">Replenishment</option>
                                    </select>
                                    {errors.projectType && <span className="text-destructive text-xs">{errors.projectType.message}</span>}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <label className="text-sm text-neutral-400">Product Interests</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {categories.map((category) => (
                                        <label key={category.id} htmlFor={`interest-${category.id}`} className="flex items-center space-x-3 p-4 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 cursor-pointer transition-colors">
                                            <input
                                                type="checkbox"
                                                id={`interest-${category.id}`}
                                                value={category.name}
                                                {...register("interests")}
                                                className="accent-primary w-4 h-4"
                                            />
                                            <span className="text-white text-sm">{category.name}</span>
                                        </label>
                                    ))}
                                    <label htmlFor="interest-custom-development" className="flex items-center space-x-3 p-4 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 cursor-pointer transition-colors">
                                        <input
                                            type="checkbox"
                                            id="interest-custom-development"
                                            value="Custom Development"
                                            {...register("interests")}
                                            className="accent-primary w-4 h-4"
                                        />
                                        <span className="text-white text-sm">Custom Development</span>
                                    </label>
                                </div>
                                {errors.interests && <span className="text-destructive text-xs">{errors.interests.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-neutral-400">Additional Notes</label>
                                <textarea
                                    id="message"
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-primary px-4 py-3 text-white outline-none transition-colors resize-none"
                                    placeholder="Tell us about your specific requirements..."
                                />
                            </div>

                            <div className="flex items-center space-x-3 py-4 border-t border-white/5">
                                <input
                                    type="checkbox"
                                    id="sampleRequest"
                                    {...register("sampleRequest")}
                                    className="accent-primary w-5 h-5"
                                />
                                <label htmlFor="sampleRequest" className="text-white cursor-pointer">
                                    <span className="block font-medium">Request Sample Kit</span>
                                    <span className="text-xs text-neutral-500">Physical examples of our materials and finishes.</span>
                                </label>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-between pt-8 border-t border-neutral-800">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={currentStep === 1 ? "invisible" : ""}
                    >
                        <ChevronLeft size={16} className="mr-2" /> Back
                    </Button>

                    {currentStep < 3 ? (
                        <Button type="button" onClick={nextStep}>
                            Next Step <ChevronRight size={16} className="ml-2" />
                        </Button>
                    ) : (
                        <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className="mr-2 animate-spin" /> Sending...
                                </>
                            ) : (
                                "Submit Request"
                            )}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}
