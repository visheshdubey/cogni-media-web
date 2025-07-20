import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Rocket } from "lucide-react";
import React from "react";
import AboutUsCarousel from "./AboutUsCarousel";

const SectionAboutUs = () => {
    return (
        <section className="w-full bg-[url('https://ik.imagekit.io/az5ky9e0s4/home/home-section-about-us-bg_rSBsUyj89t.jpg?updatedAt=1753014552595')] bg-cover bg-bottom-right md:bg-center">
            <div className="max-w-7xl mx-auto px-4 py-16 ">
                <SectionIconLabel title="About Us">
                    <Rocket size={20} />
                </SectionIconLabel>

                <div className="flex flex-col md:flex-row w-full items-start justify-between mt-4">
                    <AnimatedSectionTitle className="w-full md:w-1/2" animation="slideUp">
                        Cognivision Digital media services is a future forward
                    </AnimatedSectionTitle>

                    <TextAnimate
                        className="text-base font-inter-tight mt-4 md:mt-0 leading-relaxed text-neutral-900 w-full md:w-1/2 max-w-xl tracking-wider"
                        animation="slideUp"
                        delay={0.5}
                    >
                        We are a next-gen digital media company blending creativity, technology, and AI to deliver high-impact content across industries like e-commerce, fashion,
                        healthcare, and more.
                    </TextAnimate>
                </div>

                <AboutUsCarousel className="mt-12 md:mt-24" />
            </div>
        </section>
    );
};

export default SectionAboutUs;
