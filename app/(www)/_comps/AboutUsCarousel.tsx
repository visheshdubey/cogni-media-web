import { cn } from "@/lib/utils";
import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Rocket } from "lucide-react";

const AboutUsCarousel = ({ className }: { className?: string }) => {
    return (
        <Carousel className={cn("w-full", className)}>
            <CarouselContent className="gap-4 px-8">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-8 rounded-3xl border-4 border-brand-primary/10 flex flex-col">
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

export default AboutUsCarousel;
