import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { Rocket } from "lucide-react";
import React from "react";
import AnimatedBuilding from "./AnimatedBuilding";
import { TextAnimate } from "@/components/magicui/text-animate";
import IndustryTabContent from "./IndustryTabContent";

const SectionIndustries = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="w-full max-w-7xl mx-auto bg-gradient-to-b from-brand-primary to-brand-secondary md:rounded-[52px] px-4 py-12 md:px-24 md:py-24">
                <SectionIconLabel title="Next-Gen" className="[&>h3]:text-white [&>div]:size-fit">
                    <Rocket className="size-5 !text-white" />
                </SectionIconLabel>

                <div className="flex w-full items-end justify-between">
                    <AnimatedSectionTitle className="w-full md:w-1/2 text-4xl md:text-7xl mt-4 text-white" animation="slideUp">
                        Our Industry Footprint
                    </AnimatedSectionTitle>

                    <div className="absolute md:relative w-1/2 h-40 md:h-60 md:-mt-12 right-4 ">
                        <AnimatedBuilding className="h-full" delay={0.5} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full items-start justify-between mt-12 gap-4 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <TextAnimate className="text-2xl md:text-[28px]/[32px] font-semibold text-white" animation="slideUp">
                            Video Post-production Services (VFX)
                        </TextAnimate>

                        <TextAnimate className="text-base font-inter-tight mt-4 leading-relaxed text-white/80  max-w-xl tracking-wider" animation="slideUp" delay={0.5}>
                            Digital media is integral to every industry, but each leverages it uniquely. At Stackways, we don’t just use digital tools to enhance brand visibility;
                        </TextAnimate>
                    </div>

                    <div className="w-full md:w-1/2">
                        <TextAnimate
                            transition={{
                                delay: 1,
                            }}
                            className="text-base font-inter-tight leading-relaxed text-white/80  max-w-xl tracking-wider"
                            animation="slideUp"
                            delay={0.5}
                        >
                            We harness them to predict trends and provide a competitive edge. As a core part of Stackways Technologies, our media capabilities are seamlessly
                            embedded across all business structures, ensuring every facet of the Stackways Group benefits from our integrated strengths.l tools to enhance brand
                            visibility;
                        </TextAnimate>
                    </div>
                </div>

                <IndustryTabContent />
            </div>
        </section>
    );
};

export default SectionIndustries;
