"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { slides } from "@/app/(www)/_comps/carousel-data";

type ServicesHeroCarouselProps = {
    className?: string;
};

const ServicesHeroCarousel = (props: ServicesHeroCarouselProps) => {
    const plugin = React.useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: true,
        })
    );

    return (
        <div className="relative aspect-[3] overflow-hidden z-10">
            <div className="absolute inset-0 bg-black/50 z-10 w-full flex justify-center pt-32 md:pt-44">
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-white font-bricolage mx-auto w-fit">Services</h1>
            </div>
            <Carousel
                className="w-full h-full [&>div]:h-full"
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                    startIndex: 0,
                }}
            >
                <CarouselContent className="h-full ">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="relative w-full h-full bg-black">
                            {slide.type === "video" ? (
                                <video src={slide.resource} autoPlay muted loop className="w-full h-full object-cover" />
                            ) : (
                                <Image src={slide.resource} alt={`Hero Carousel ${index + 1}`} width={1000} height={1000} className="w-full h-full object-cover" />
                            )}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ServicesHeroCarousel;
