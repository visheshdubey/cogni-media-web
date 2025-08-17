import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceSectionProps {
    number: string;
    title: string;
    description: string;
    learnMoreHref: string;
    learnMoreText?: string;
    children: React.ReactNode;
    className?: string;
    reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ number, title, description, learnMoreHref, learnMoreText = "Learn More", children, className = "", reverse = false }) => {
    return (
        <div className={cn("w-full", className)}>
            <div className={cn("flex flex-col-reverse lg:flex-row w-full items-start lg:items-center justify-between mt-20 gap-8 lg:gap-0", reverse && "lg:flex-row-reverse")}>
                <div className="flex flex-col flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-secondary">{title}</h2>
                    <p className="text-sm md:text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl tracking-wider">{description}</p>
                    <Link href={learnMoreHref} className="mt-4 text-sm font-semibold text-brand-secondary hover:underline flex items-center gap-2">
                        <span>{learnMoreText}</span> <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <span className="text-brand-secondary/30 text-6xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[240px] font-black leading-none self-center lg:self-auto">
                    {number}
                </span>
            </div>
            {children}
        </div>
    );
};

export default ServiceSection;
