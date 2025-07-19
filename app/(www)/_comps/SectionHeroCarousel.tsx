"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { CarouselIndicator } from "@/app/(www)/_comps/carousel-indicator";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ace-ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { TextAnimate2 } from "@/components/magicui/text-animate-2";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./carousel-data";

export function SectionHeroCarousel() {
    const plugin = React.useRef(
        Autoplay({
            delay: 4000,
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

    const scrollPrev = React.useCallback(() => {
        if (api) api.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
        if (api) api.scrollNext();
    }, [api]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Carousel
                className="w-full h-full [&>div]:h-full"
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                    startIndex: 0,
                }}
                setApi={setApi}
            >
                <CarouselContent className="h-full ">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="w-full h-full bg-black">
                            {slide.type === "video" ? (
                                <video src={slide.resource} autoPlay muted loop className="w-full h-full object-cover" />
                            ) : (
                                <Image src={slide.resource} alt={`Hero Carousel ${index + 1}`} width={1000} height={1000} className="w-full h-full object-cover" />
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Custom Navigation Buttons */}
            <div className="md:hidden absolute bottom-4 right-4 z-40 flex gap-4">
                <Button onClick={scrollPrev} className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-12 h-12 p-0" size="icon">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button onClick={scrollNext} className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 rounded-full w-12 h-12 p-0" size="icon">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            <div className="bg-black/40 absolute inset-0 w-full h-full"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-start max-w-7xl mx-auto z-10">
                <div className="text-start text-white w-full max-w-4xl px-4 md:px-6">
                    <TextAnimate2
                        animation="blurInUp"
                        duration={0.5}
                        as="h1"
                        className="text-4xl lg:text-5xl font-bricolage xl:text-6xl font-semibold mb-6 leading-tight text-white"
                    >
                        {slides[currentSlide].title}
                    </TextAnimate2>

                    <TextGenerateEffect words={slides[currentSlide].description} className="md:text-xl leading-relaxed opacity-70 text-white" />
                    <Button className="mt-6 bg-white text-black hover:bg-white/90 w-60 h-[52px] font-semibold">Get in touch{" ->"}</Button>
                </div>
            </div>

            {/* Advanced Slide Indicators */}
            <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-20  px-6">
                <div className="flex justify-center flex-wrap_ items-end h-full gap-8">
                    {slides.map((slide, index) => (
                        <>
                            <CarouselIndicator
                                key={index}
                                className="w-1/2 md:w-1/4"
                                label={slide.indicatorLabel}
                                isActive={index === currentSlide}
                                progress={slide.progress}
                                onClick={() => {
                                    if (api) {
                                        api.scrollTo(index);
                                    }
                                }}
                            />
                            <div className="w-px h-full bg-white/20 last:hidden"></div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
