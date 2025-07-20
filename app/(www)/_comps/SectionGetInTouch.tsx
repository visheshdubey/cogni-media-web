import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SectionGetInTouch = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 md:px-12 md:py-12 bg-brand-primary my-8 md:my-12 md:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <div className="flex flex-col w-full md:w-1/2">
                <AnimatedSectionTitle className="text-4xl md:text-5xl text-white" animation="slideUp">
                    Let’s
                </AnimatedSectionTitle>
                <AnimatedSectionTitle className="text-4xl md:text-5xl text-white" animation="slideUp">
                    get in touch
                </AnimatedSectionTitle>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
                <Input type="email" placeholder="Enter your email" className="max-w-md w-full h-12 bg-white" />
                <Button className="h-12 px-12">Submit</Button>
            </div>
        </section>
    );
};

export default SectionGetInTouch;
