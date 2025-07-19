"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
    {
        image: "/home/hero-slide-1.jpg",
        title: "Digital Media Asset Production & Management",
        description:
            "Create impactful visual content—videos, images, graphics, animations, and interactive media—that transforms ideas into compelling, brand-driven digital assets.",
        indicatorLabel: "Core Value 1",
        progress: 70,
    },
    {
        image: "/home/hero-slide-2.jpg",
        title: "Creative Design Solutions",
        description: "Transform your brand with innovative design strategies that captivate audiences and drive meaningful engagement across all digital platforms.",
        indicatorLabel: "Core Value 2",
        progress: 85,
    },
    {
        image: "/home/hero-slide-1.jpg",
        title: "Strategic Content Development",
        description: "Develop compelling narratives and strategic content that resonates with your target audience and achieves your business objectives.",
        indicatorLabel: "Core Value 3",
        progress: 60,
    },
    {
        image: "/home/hero-slide-2.jpg",
        title: "Brand Identity & Visual Communication",
        description: "Build powerful brand identities through thoughtful design, consistent messaging, and visual communication that leaves lasting impressions.",
        indicatorLabel: "Core Value 4",
        progress: 90,
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
        <div className="relative w-full h-screen">
            <Carousel
                className="w-full h-full"
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                    startIndex: 0,
                }}
                setApi={setApi}
            >
                <CarouselContent className="h-full">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="w-full h-full">
                            <Image src={slide.image} alt={`Hero Carousel ${index + 1}`} width={1000} height={1000} className="w-full h-full object-cover" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50" />
                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50" />
            </Carousel>

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{slides[currentSlide].title}</h1>
                    <p className="text-xl md:text-2xl leading-relaxed opacity-90">{slides[currentSlide].description}</p>
                </div>
            </div>

            {/* Advanced Slide Indicators */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-6">
                <div className="grid grid-cols-4 gap-4">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (api) {
                                    api.scrollTo(index);
                                }
                            }}
                            className="flex flex-col items-center cursor-pointer group"
                        >
                            {/* Label */}
                            <span
                                className={`text-sm font-medium mb-2 transition-all duration-300 ${
                                    index === currentSlide ? "text-white" : "text-white/50 group-hover:text-white/75"
                                }`}
                            >
                                {slide.indicatorLabel}
                            </span>

                            {/* Progress Bar Container */}
                            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden group-hover:bg-white/30 transition-colors duration-300">
                                {/* Progress Bar Fill */}
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out ${index === currentSlide ? "bg-blue-500" : "bg-white/30"}`}
                                    style={{
                                        width: index === currentSlide ? `${slide.progress}%` : "0%",
                                    }}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
