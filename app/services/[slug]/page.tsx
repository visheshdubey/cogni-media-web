"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Check } from "lucide-react";
import { Compare } from "@/components/ace-ui/compare";

type Slide = {
    imageSrcA: string;
    imageSrcB: string;
    imageAlt?: string;
    tasks: string[];
};

type ServiceSection = {
    title: string;
    description: string;
    number: string; // e.g., "01"
    slides: Slide[];
};

type ServicePageData = {
    pageTitle: string;
    sections: ServiceSection[];
};

const SERVICE_PAGES: Record<string, ServicePageData> = {
    "photography-and-post-production-services": {
        pageTitle: "Photography and Post-Production Services",
        sections: [
            {
                title: "Product Photography",
                number: "01",
                description:
                    "Cognivision Media ensures your imagery conveys value, quality, and trust from the very first glance. We craft visual experiences that help your brand stand out.",
                slides: [
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Studio product setup",
                        tasks: ["Studio lighting setup", "Multi-angle coverage", "Color accuracy calibration", "Raw processing pipeline"],
                    },
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Lifestyle composition",
                        tasks: ["Set design and props", "Model direction", "On-set tethering", "Client live review"],
                    },
                ],
            },
            {
                title: "Post-Production & Retouching",
                number: "02",
                description: "From cleanup to high-end beauty retouching and compositing, our edit lab produces consistent, on-brand assets at scale.",
                slides: [
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Retouching workstation",
                        tasks: ["Non-destructive retouching", "Background cleanup", "Shadow and reflection build", "Export presets per channel"],
                    },
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Color grading preview",
                        tasks: ["Batch color grading", "CMYK and sRGB variants", "Metadata embedding", "QC and versioning"],
                    },
                ],
            },
        ],
    },
    // Skeleton for additional categories
    "creative-direction": {
        pageTitle: "Creative Direction",
        sections: [
            {
                title: "Campaign Architecture",
                number: "01",
                description: "Narrative-first blueprints aligning messaging, visuals, and channels to business outcomes.",
                slides: [
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        tasks: ["Audience mapping", "Concept boards", "Channel strategy", "KPI alignment"],
                    },
                ],
            },
        ],
    },
};

interface PageProps {
    params: { slug: string };
}

const ServicesDetailPage: React.FC<PageProps> = ({ params }) => {
    const data = SERVICE_PAGES[params.slug];

    if (!data) {
        return (
            <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-brand-secondary font-bricolage">Service Not Found</h1>
                <p className="mt-4 text-neutral-700">We could not find details for this service.</p>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            {/* Top banner: reuse Services page gradient + title style */}
            <section className="relative w-full min-h-fit pt-32 md:pt-44 pb-12">
                <div className="absolute rotate-180 top-0 z-10 inset-x-0 bg-[url('/home/home-section-about-us-bg.jpg')] bg-cover bg-bottom w-full h-full" />
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-brand-secondary font-bricolage mx-auto w-fit">{data.pageTitle}</h1>
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20" />
            </section>

            {/* Sections for each specific service in this category */}
            <section className="w-full">
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-6 md:pt-10 pb-20 flex flex-col gap-24">
                    {data.sections.map((section, index) => (
                        <ServiceDetailSection key={section.title} section={section} index={index} />
                    ))}
                </div>
            </section>
        </main>
    );
};

const ServiceDetailSection: React.FC<{ section: ServiceSection; index: number }> = ({ section }) => {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!api) return;
        const update = () => setSelectedIndex(api.selectedScrollSnap());
        update();
        api.on("select", update);
        api.on("reInit", update);
        return () => {
            api.off("select", update);
            api.off("reInit", update);
        };
    }, [api]);

    const activeSlide = useMemo(() => section.slides[selectedIndex] ?? section.slides[0], [section.slides, selectedIndex]);

    return (
        <div className="flex flex-col gap-8">
            {/* Header with number */}
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-brand-secondary">{section.title}</h2>
                    <p className="text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl tracking-wider">{section.description}</p>
                </div>
                <span className="text-brand-secondary/30 text-[200px] md:text-[240px] font-black leading-none">{section.number}</span>
            </div>

            {/* Slider + Task list */}
            <div className="flex items-start w-full bg-brand-primary rounded-2xl">
                {/* Slider 80% */}
                <div className="w-4/5">
                    <div className="relative">
                        <Carousel setApi={setApi} className="w-full" opts={{ align: "start", loop: false }}>
                            <CarouselContent>
                                {section.slides.map((slide, i) => (
                                    <CarouselItem key={`${section.title}-slide-${i}`}>
                                        <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9]">
                                            <Compare
                                                firstImage={slide.imageSrcA}
                                                secondImage={slide.imageSrcB}
                                                firstImageClassName="object-cover object-left-top"
                                                secondImageClassname="object-cover object-left-top"
                                                className="h-full w-full"
                                                slideMode="hover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-4 md:-left-12 bg-white/80 backdrop-blur" />
                            <CarouselNext className="-right-4 md:-right-12 bg-white/80 backdrop-blur" />
                        </Carousel>
                    </div>
                </div>
                {/* Task list 20% */}
                <div className="w-1/5 h-1/2 flex ">
                    <div className="p-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Performed</h4>
                        <ul className="space-y-2">
                            {activeSlide.tasks.map((task, idx) => (
                                <li key={`${section.title}-task-${selectedIndex}-${idx}`} className="flex items-start gap-2 text-[13px] text-white/90">
                                    <Check className="mt-0.5 h-3.5 w-3.5 text-white/80" />
                                    <span className="leading-snug font-medium">{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailPage;
