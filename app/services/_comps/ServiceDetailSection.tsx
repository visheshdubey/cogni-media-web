"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Compare } from "@/components/ace-ui/compare";
import { Button } from "@/components/ui/button";

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

    const scrollPrev = React.useCallback(() => {
        if (api) api.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
        if (api) api.scrollNext();
    }, [api]);

    const activeSlide = useMemo(() => section.slides[selectedIndex] ?? section.slides[0], [section.slides, selectedIndex]);

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            {/* Header with number */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
                <div className="flex flex-col order-2 lg:order-1">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-secondary">{section.title}</h2>
                    <p className="text-sm md:text-base font-inter-tight mt-2 md:mt-4 leading-relaxed text-neutral-900 w-full max-w-2xl tracking-wider">{section.description}</p>
                </div>
                <span className="text-brand-secondary/30 text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-black leading-none order-1 lg:order-2 self-center lg:self-auto">
                    {section.number}
                </span>
            </div>

            {/* Slider + Task list */}
            <div className="flex flex-col lg:flex-row items-start w-full bg-brand-primary rounded-xl md:rounded-2xl">
                {/* Slider - full width on mobile, 80% on larger screens */}
                <div className="w-full lg:w-4/5 order-1 lg:order-1">
                    <div className="relative">
                        <Carousel
                            setApi={setApi}
                            className="w-full"
                            opts={{ align: "center", loop: true, dragFree: false, containScroll: "trimSnaps", skipSnaps: true, inViewThreshold: 0.7, watchDrag: false }}
                        >
                            <CarouselContent>
                                {section.slides.map((slide, i) => (
                                    <CarouselItem key={`${section.title}-slide-${i}`}>
                                        <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl aspect-[16/9]">
                                            <Compare
                                                firstImage={slide.imageSrcA}
                                                secondImage={slide.imageSrcB}
                                                firstImageClassName="object-cover object-left-top"
                                                secondImageClassname="object-cover object-left-top"
                                                className="h-full w-full"
                                                slideMode="drag"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Navigation buttons - responsive positioning */}
                            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-40 flex gap-2 md:gap-4 w-auto md:w-1/2 h-12 md:h-16 justify-end">
                                <Button
                                    onClick={scrollPrev}
                                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-10 h-10 md:w-12 md:h-12 p-0"
                                    size="icon"
                                >
                                    <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                                </Button>
                                <Button
                                    onClick={scrollNext}
                                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-10 h-10 md:w-12 md:h-12 p-0"
                                    size="icon"
                                >
                                    <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                                </Button>
                            </div>
                        </Carousel>
                    </div>
                </div>

                {/* Task list - full width on mobile, 20% on larger screens */}
                <div className="w-full lg:w-1/5 order-2 lg:order-2">
                    <div className="p-4 md:p-6">
                        <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Performed</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                            {activeSlide.tasks.map((task, idx) => (
                                <li key={`${section.title}-task-${selectedIndex}-${idx}`} className="flex items-start gap-2 text-xs md:text-[13px] text-white/90">
                                    <Check className="mt-0.5 h-3 md:h-3.5 w-3 md:w-3.5 text-white/80 flex-shrink-0" />
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
