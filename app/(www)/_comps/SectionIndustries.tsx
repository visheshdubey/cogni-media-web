import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { Rocket } from "lucide-react";
import React from "react";
import AnimatedBuilding from "./AnimatedBuilding";
import { TextAnimate } from "@/components/magicui/text-animate";
import IndustryTabContent from "./IndustryTabContent";

const SectionIndustries = () => {
    return (
        <section className="w-full px-4">
            <div className="w-full max-w-7xl mx-auto bg-gradient-to-b from-brand-primary to-brand-secondary rounded-[64px] p-24">
                <SectionIconLabel title="Next-Gen" className="[&>h3]:text-white [&>div]:size-fit">
                    <Rocket className="size-5 !text-white" />
                </SectionIconLabel>

                <div className="flex w-full items-end justify-between">
                    <AnimatedSectionTitle className="w-full md:w-1/2 text-4xl md:text-7xl mt-4 text-white" animation="slideUp">
                        Our Industry Footprint
                    </AnimatedSectionTitle>

                    <div className="hidden md:block w-1/2 h-60 -mt-12">
                        <AnimatedBuilding className="h-full" delay={0.5} />
                    </div>
                </div>

                <div className="flex w-full items-start justify-between mt-12 gap-12">
                    <div className="w-1/2">
                        <TextAnimate className="text-[28px]/[32px] font-semibold text-white" animation="slideUp">
                            Video Post-production Services (VFX)
                        </TextAnimate>

                        <TextAnimate className="text-base font-inter-tight mt-4 leading-relaxed text-white/80  max-w-xl tracking-wider" animation="slideUp" delay={0.5}>
                            Digital media is integral to every industry, but each leverages it uniquely. At Stackways, we don’t just use digital tools to enhance brand visibility;
                        </TextAnimate>
                    </div>

                    <div className="w-1/2">
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
