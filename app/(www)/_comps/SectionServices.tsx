import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { Rocket } from "lucide-react";
import React from "react";
import Image from "next/image";
import { SlideUpInView } from "@/components/magicui/slide-up-in-view";

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
                <div className="relative mt-14 w-full">
                    <Image
                        src="https://ik.imagekit.io/az5ky9e0s4/home/home-section-services-1_0DRpaHjdTI.jpg?updatedAt=1753014552581"
                        alt="Services"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover aspect-video"
                    />
                </div>
            </SlideUpInView>
            <SlideUpInView className="w-full" delay={0.2}>
                <div className="relative mt-4 w-full">
                    <Image
                        src="https://ik.imagekit.io/az5ky9e0s4/home/home-section-services-2_1q_pIRz8E.jpg?updatedAt=1753014552819"
                        alt="Services"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover aspect-video"
                    />
                </div>
            </SlideUpInView>
        </section>
    );
};

export default SectionServices;
