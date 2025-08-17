import React from "react";
import { SlideUpInView } from "@/components/magicui/slide-up-in-view";
import ServiceCard from "./service-card";
import { cn } from "@/lib/utils";

export interface ServiceGridProps {
    services: Array<{
        title: string;
        href: string;
        imageSrc: string;
        badge?: string;
    }>;
    className?: string;
    gridCols?: "1" | "2" | "3" | "4";
    gap?: "sm" | "md" | "lg";
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, className = "", gridCols = "4", gap = "md" }) => {
    const gridColsClasses = {
        "1": "grid-cols-1",
        "2": "grid-cols-1 sm:grid-cols-2",
        "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    };

    const gapClasses = {
        sm: "gap-4",
        md: "gap-4 md:gap-6",
        lg: "gap-6 md:gap-8",
    };

    return (
        <SlideUpInView className={cn("mt-12 grid", gridColsClasses[gridCols], gapClasses[gap], className)}>
            {services.map((service) => (
                <ServiceCard key={service.title} title={service.title} href={service.href} imageSrc={service.imageSrc} badge={service.badge} />
            ))}
        </SlideUpInView>
    );
};

export default ServiceGrid;
