import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { Rocket } from "lucide-react";
import React from "react";

import { SlideUpInView } from "@/components/magicui/slide-up-in-view";
import ServiceOverlayStackCard from "./ServiceOverlayStackCard";

const SectionServices = () => {
    return (
        <section className="max-w-7xl flex flex-col items-center w-full mx-auto px-4 py-16">
            <SectionIconLabel title="Next-Gen Visuals">
                <Rocket size={20} />
            </SectionIconLabel>
            <AnimatedSectionTitle className="w-fit text-center mt-4" animation="slideUp">
                Our Creative edge
            </AnimatedSectionTitle>
            <SlideUpInView className="w-full" delay={0.2}>
                <ServiceOverlayStackCard
                    imageSrc="https://ik.imagekit.io/az5ky9e0s4/home/home-section-services-1_0DRpaHjdTI.jpg?updatedAt=1753014552581"
                    title="Photography and Post-Production Services"
                />
            </SlideUpInView>
            <SlideUpInView className="w-full" delay={0.2}>
                <ServiceOverlayStackCard
                    imageSrc="https://ik.imagekit.io/az5ky9e0s4/home/home-section-services-2_1q_pIRz8E.jpg?updatedAt=1753014552819"
                    title="Creative Direction"
                />
            </SlideUpInView>
        </section>
    );
};

export default SectionServices;
