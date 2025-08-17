"use client";
import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Rocket } from "lucide-react";
import { useMediaQuery } from "@/lib/use-media-query";

export function WhyChooseUsCarousel() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return <div className="relative h-full w-full max-w-md md:max-w-md z-20">{isMobile ? <HorizontalCarousel /> : <VerticalCarousel />}</div>;
}

const VerticalCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            orientation="vertical"
            className="w-full h-full"
            plugins={[AutoScroll({ playOnInit: true, speed: 2 })]}
        >
            <CarouselContent className="-mt-1 h-[900px] gap-4 px-8 py-12">
                {Array.from({ length: 20 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/4">
                        <div className="p-4 md:p-8 rounded-3xl border-4 border-brand-primary/10 flex flex-col bg-white shadow-lg">
                            <div className="flex items-center p-[18px] w-fit h-fit bg-brand-primary/10 rounded-lg justify-center [&>svg]:text-brand-primary">
                                <Rocket className="size-6" />
                            </div>

                            <div className="text-[22px] font-semibold font-inter-tight text-brand-secondary mt-12">AI-Driven Solutions</div>

                            <p className="font-inter-tight leading-relaxed tracking-wider text-neutral-900 mt-4">
                                Integrates artificial intelligence into media services for smarter, data-backed content and visuals.
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

const HorizontalCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            orientation="horizontal"
            className="w-full h-full"
            plugins={[
                AutoScroll({
                    playOnInit: true,
                    speed: 2,
                }),
            ]}
        >
            <CarouselContent className="gap-2  py-8 h-full w-full">
                {Array.from({ length: 20 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 basis-full">
                        <div className="p-4 md:p-8 rounded-3xl border-4 border-brand-primary/10 flex flex-col bg-white shadow-lg">
                            <div className="flex items-center p-[18px] w-fit h-fit bg-brand-primary/10 rounded-lg justify-center [&>svg]:text-brand-primary">
                                <Rocket className="size-6" />
                            </div>

                            <div className="text-[22px] font-semibold font-inter-tight text-brand-secondary mt-12">AI-Driven Solutions</div>

                            <p className="font-inter-tight leading-relaxed tracking-wider text-neutral-900 mt-4">
                                Integrates artificial intelligence into media services for smarter, data-backed content and visuals.
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
