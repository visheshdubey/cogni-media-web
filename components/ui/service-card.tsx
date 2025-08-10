import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
    title: string;
    href: string;
    imageSrc: string;
    imageAlt?: string;
    badge?: string;
    className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, href, imageSrc, imageAlt = "Service", badge, className = "" }) => {
    return (
        <Link
            href={href}
            className={cn(
                "group relative block overflow-hidden rounded-2xl",
                "border border-black/5 bg-white/60 shadow-sm backdrop-blur",
                "transition-all duration-300 ease-out",
                "hover:shadow-xl hover:border-brand-secondary/30",
                className
            )}
        >
            <div className="relative w-full aspect-[4/5]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    priority={false}
                />

                {/* top gradient + badge */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                {badge ? (
                    <span
                        className={cn(
                            "absolute left-3 top-3 z-10 inline-flex items-center gap-1",
                            "rounded-full px-3 py-1 text-[11px] font-semibold",
                            "text-white",
                            "bg-white/10 backdrop-blur-md",
                            "ring-1 ring-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.25)]",
                            "transition-all duration-300",
                            "group-hover:bg-white/15 group-hover:ring-white/40"
                        )}
                        aria-hidden
                    >
                        {badge}
                    </span>
                ) : null}

                {/* bottom content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-3 md:p-4">
                    <div className="flex items-end justify-between gap-3">
                        <h3 className="text-white text-lg md:text-xl font-semibold leading-tight drop-shadow-sm">{title}</h3>
                        <span
                            className={cn(
                                "inline-flex size-10 aspect-square items-center justify-center rounded-md",
                                "bg-white text-brand-secondary shadow-md",
                                "transition-all duration-300",
                                "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                            )}
                            aria-hidden
                        >
                            <ArrowRight className="size-4" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
