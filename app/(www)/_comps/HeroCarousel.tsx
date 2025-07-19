"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { CarouselIndicator } from "@/app/(www)/_comps/carousel-indicator";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ace-ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";

const slides = [
    {
        resource: "/home/hero-slide-vid-1.mp4",
        title: "Digital Media Asset Production & Management",
        description:
            "Create impactful visual content—videos, images, graphics, animations, and interactive media—that transforms ideas into compelling, brand-driven digital assets.",
        indicatorLabel: "Core Value 1",
        progress: 70,
        type: "video",
    },
    {
        resource: "/home/hero-slide-vid-2.mp4",
        title: "Creative Design Solutions",
        description: "Transform your brand with innovative design strategies that captivate audiences and drive meaningful engagement across all digital platforms.",
        indicatorLabel: "Core Value 2",
        progress: 85,
        type: "video",
    },
    {
        resource: "/home/hero-slide-vid-3.mp4",
        title: "Strategic Content Development",
        description: "Develop compelling narratives and strategic content that resonates with your target audience and achieves your business objectives.",
        indicatorLabel: "Core Value 3",
        progress: 60,
        type: "video",
    },
    {
        resource: "/home/hero-slide-vid-1.mp4",
        title: "Brand Identity & Visual Communication",
        description: "Build powerful brand identities through thoughtful design, consistent messaging, and visual communication that leaves lasting impressions.",
        indicatorLabel: "Core Value 4",
        progress: 90,
        type: "video",
    },
];

export function HeroCarousel() {
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
                {/* <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50" />
                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50" /> */}
            </Carousel>

            <div className="bg-black/40 absolute inset-0 w-full h-full"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-start max-w-7xl mx-auto z-10">
                <div className="text-start text-white w-full max-w-4xl px-6">
                    <TextAnimate animation="blurInUp" duration={0.5} as="h1" className="text-5xl font-bricolage md:text-6xl font-semibold mb-6 leading-tight text-white">
                        {slides[currentSlide].title}
                    </TextAnimate>

                    <TextGenerateEffect words={slides[currentSlide].description} className="md:text-xl leading-relaxed opacity-70 text-white" />
                    <Button className="mt-6 bg-white text-black hover:bg-white/90 w-60 h-[52px] font-semibold">Get in touch{" ->"}</Button>
                </div>
            </div>

            {/* Advanced Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-20  px-6">
                <div className="flex justify-center items-end h-full gap-4">
                    {slides.map((slide, index) => (
                        <>
                            <CarouselIndicator
                                key={index}
                                className="w-1/4"
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
