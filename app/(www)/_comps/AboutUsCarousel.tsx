"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { CarouselIndicator } from "@/app/(www)/_comps/carousel-indicator";
import { Rocket, ChevronLeft, ChevronRight } from "lucide-react";

const AboutUsCarousel = ({ className }: { className?: string }) => {
    const plugin = React.useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: true,
        })
    );
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [api, setApi] = React.useState<CarouselApi>();

    React.useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap());
        });
    }, [api]);

    const scrollTo = React.useCallback(
        (index: number) => {
            if (api) api.scrollTo(index);
        },
        [api]
    );

    const scrollPrev = React.useCallback(() => {
        if (api) api.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
        if (api) api.scrollNext();
    }, [api]);

    return (
        <div className={cn("w-full", className)}>
            <Carousel
                className="w-full"
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                    startIndex: 0,
                }}
                setApi={setApi}
            >
                <CarouselContent className="gap-2 md:gap-4 px-4 md:px-8 py-8 md:py-12">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
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
            <div className="flex gap-4 items-center justify-between">
                {/* Carousel Indicators */}
                <div className="hidden md:flex justify-center items-center gap-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cn("w-3 h-3 rounded-full transition-all duration-300", currentSlide === index ? "bg-white/50 scale-110" : "bg-white/10 hover:bg-white/50")}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="justify-center flex items-center gap-4 ml-auto md:mr-4">
                    <button
                        onClick={scrollPrev}
                        className="size-10 md:size-12 border-0  bg-white/40 backdrop-blur-2xl hover:bg-white/70 text-brand-primary rounded-md flex items-center justify-center transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="size-5 text-brand-primary" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="size-10 md:size-12 border-0 bg-white/40 backdrop-blur-2xl hover:bg-white/70 text-brand-primary rounded-md flex items-center justify-center transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="size-5 text-brand-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsCarousel;
