import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Rocket } from "lucide-react";
import React from "react";
import AboutUsCarousel from "./AboutUsCarousel";
import Image from "next/image";

const SectionServices = () => {
    return (
        <section className="max-w-7xl flex flex-col items-center w-full mx-auto px-4 py-16">
            <SectionIconLabel title="Next-Gen Visuals">
                <Rocket size={20} />
            </SectionIconLabel>
            <AnimatedSectionTitle className="w-fit text-center mt-4" animation="slideUp">
                Our Creative edge
            </AnimatedSectionTitle>
            <div className="relative mt-14 w-full">
                <Image
                    src="https://ik.imagekit.io/az5ky9e0s4/home/home-section-services-1_0DRpaHjdTI.jpg?updatedAt=1753014552581"
                    alt="Services"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative mt-4 w-full">
                <Image
                    src="https://ik.imagekit.io/az5ky9e0s4/home/home-section-services-2_1q_pIRz8E.jpg?updatedAt=1753014552819"
                    alt="Services"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* <div className="flex flex-col md:flex-row w-full items-start justify-between mt-4">
                <TextAnimate
                    className="text-base font-inter-tight mt-4 md:mt-0 leading-relaxed text-neutral-900 w-full md:w-1/2 max-w-xl tracking-wider"
                    animation="slideUp"
                    delay={0.5}
                >
                    We are a next-gen digital media company blending creativity, technology, and AI to deliver high-impact content across industries like e-commerce, fashion,
                    healthcare, and more.
                </TextAnimate>
            </div>

            <AboutUsCarousel className="mt-12 md:mt-24" /> */}
        </section>
    );
};

export default SectionServices;
