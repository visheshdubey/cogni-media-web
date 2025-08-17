import { Rocket } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
    imageSrc: string;
    title: string;
};

const ServiceOverlayStackCard = ({ imageSrc, title }: Props) => {
    return (
        <div className="relative mt-14 w-full rounded-2xl overflow-hidden group">
            <Image
                src={imageSrc}
                alt="Services"
                width={1000}
                height={1000}
                className="w-full h-full object-cover aspect-video md:group-hover:scale-105 transition-all duration-500 ease-out rounded-2xl"
            />

            {/* Mobile layout - card below image */}
            <div className="md:hidden w-full bg-neutral-900 backdrop-blur-sm rounded-2xl border border-white/30 p-4 mt-1">
                <div className="flex flex-col">
                    <div className="text-[22px] font-semibold font-inter-tight text-white mt-8">{title}</div>

                    <p className="font-inter-tight leading-relaxed tracking-wider text-white/80 mt-4">
                        Integrates artificial intelligence into media services for smarter, data-backed content and visuals.
                    </p>
                </div>
            </div>

            {/* Desktop overlay layout - hidden on mobile */}
            <div className="hidden md:flex group-hover:scale-[85%] scale-90 transition-all duration-500 ease-out rounded-2xl absolute w-1/2 border origin-center border-white/10 aspect-[1.8] group-hover:top-[calc(50%-32px)] top-[calc(50%-40px)] right-6 -translate-y-1/2 bg-black/30 items-center justify-center"></div>
            <div className="hidden md:flex group-hover:scale-[92%] scale-95 transition-all duration-500 ease-out rounded-2xl absolute w-1/2 border origin-center border-white/20 aspect-[1.8] group-hover:top-[calc(50%-16px)] top-[calc(50%-20px)] right-6 -translate-y-1/2 bg-black/10 items-center justify-center"></div>
            <div className="hidden md:flex group-hover:scale-[98%] group-hover:bg-brand-primary/80 scale-100 transition-all duration-500 ease-out rounded-2xl absolute w-1/2 border border-white/30 aspect-[1.8] backdrop-blur-sm top-1/2 right-6 -translate-y-1/2 bg-black/60 items-center justify-center">
                <div className="p-4 md:p-6 flex flex-col">
                    <div className="text-[22px] font-semibold font-inter-tight text-white mt-8">{title}</div>

                    <p className="font-inter-tight leading-relaxed tracking-wider text-white/80 mt-4">
                        Integrates artificial intelligence into media services for smarter, data-backed content and visuals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverlayStackCard;
