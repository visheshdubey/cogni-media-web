"use client";

import React, { useEffect, useMemo, useState } from "react";
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

interface ServiceDetailSectionProps {
    section: ServiceSection;
    index: number;
}

export const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({ section }) => {
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
