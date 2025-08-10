"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { slides } from "@/app/(www)/_comps/carousel-data";

const ServicesHeroCarousel = () => {
    const plugin = React.useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: true,
        })
    );

    return (
        <div className="relative rounded-xl aspect-[3] overflow-hidden z-10">
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
        </div>
    );
};

export default ServicesHeroCarousel;
