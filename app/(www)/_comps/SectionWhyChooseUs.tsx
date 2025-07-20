import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import React from "react";
import { WhyChooseUsCarousel } from "./WhyChooseUsCarousel";
import { WorldMap } from "@/components/ace-ui/world-map";

const SectionWhyChooseUs = () => {
    return (
        <section className="w-full mt-12 md:mt-24 md:h-[90vh] overflow-hidden md:min-h-[90vh] bg-[url('/home/home-section-why-choose-us-bg.jpg')] bg-cover bg-center bg-no-repeat flex">
            <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-0 flex-col md:flex-row flex  h-full flex-1 items-center justify-between">
                <div className="z-20 flex flex-col w-fit">
                    <SectionIconLabel title="Next-Gen Visuals">
                        <Rocket size={20} />
                    </SectionIconLabel>
                    <AnimatedSectionTitle className="w-fit text-center mt-4" animation="slideUp">
                        Why choose us?
                    </AnimatedSectionTitle>

                    <TextAnimate className="text-base font-inter-tight mt-4 leading-relaxed text-neutral-900 w-full max-w-xl tracking-wider" animation="slideUp" delay={0.5}>
                        From enterprise software and AI-powered cloud engineering to creative and content production and DAM.
                    </TextAnimate>

                    <Button className="mt-8 md:mt-12 bg-brand-primary text-white hover:bg-brand-primary/90 w-60 h-[52px] font-semibold">Get in touch{" ->"}</Button>
                </div>
                <div className="z-10 absolute translate-x-[-20%] inset-x-0 opacity-30 top-[50%] translate-y-[-50%] hidden md:block">
                    <WorldMap
                        dots={[
                            {
                                start: {
                                    lat: 64.2008,
                                    lng: -149.4937,
                                }, // Alaska (Fairbanks)
                                end: {
                                    lat: 34.0522,
                                    lng: -118.2437,
                                }, // Los Angeles
                            },
                            {
                                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            },
                            {
                                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                            },
                            {
                                start: { lat: 51.5074, lng: -0.1278 }, // London
                                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            },
                            {
                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                            },
                            {
                                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                            },
                        ]}
                    />
                </div>
                <WhyChooseUsCarousel />
            </div>
        </section>
    );
};

export default SectionWhyChooseUs;
