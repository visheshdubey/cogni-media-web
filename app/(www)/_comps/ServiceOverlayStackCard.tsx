import Image from "next/image";
import React from "react";

type Props = {
    imageSrc: string;
    title: string;
};

const ServiceOverlayStackCard = ({ imageSrc, title }: Props) => {
    return (
        <div className="relative mt-14 w-full rounded-2xl overflow-hidden group">
            <Image src={imageSrc} alt="Services" width={1000} height={1000} className="w-full h-full object-cover aspect-video" />

            <div className="group-hover:scale-[85%] scale-90 transition-all duration-500 ease-out rounded-2xl absolute w-1/2 border origin-center border-white/10 aspect-[1.8] group-hover:top-[calc(50%-32px)] top-[calc(50%-40px)] right-6 -translate-y-1/2 bg-black/30 flex items-center justify-center"></div>
            <div className="group-hover:scale-[92%] scale-95 transition-all duration-500 ease-out rounded-2xl absolute w-1/2 border origin-center border-white/20 aspect-[1.8] group-hover:top-[calc(50%-16px)] top-[calc(50%-20px)] right-6 -translate-y-1/2 bg-black/10 flex items-center justify-center"></div>
            <div className="group-hover:scale-[98%] group-hover:bg-brand-primary/80 scale-100 transition-all duration-500 ease-out rounded-2xl absolute w-1/2 border border-white/30 aspect-[1.8] backdrop-blur-sm top-1/2 right-6 -translate-y-1/2 bg-black/60 flex items-center justify-center">
                <h2 className="text-white text-2xl font-bold">{title}</h2>
            </div>
        </div>
    );
};

export default ServiceOverlayStackCard;
