import React from "react";
import AnimatedSectionTitle from "../_comps/AnimatedSectionTitle";
import SectionIconLabel from "../_comps/SectionIconLabel";
import { Rocket } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import HoverCard from "@/app/about/_comps/hover-card";
import NumberedCard from "@/app/about/_comps/numbered-card";
import ContentCard from "@/app/_comps/content-card";
import TrifectaItem from "@/app/about/_comps/trifecta-item";
import Image from "next/image";

const AboutPage = () => {
    return (
        <main>
            <section className="relative w-full min-h-screen pt-32 md:pt-44">
                <div className="absolute rotate-180 top-0 z-10 inset-x-0 bg-[url('/about-us/top-bg-pattern.jpg')] bg-cover bg-bottom w-full h-1/2"></div>
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-brand-secondary font-bricolage mx-auto w-fit">About us</h1>
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                    <ContentCard
                        icon={Rocket}
                        iconTitle="About Us"
                        title="Who we are?"
                        paragraphs={[
                            "Cognivision Media is a full-spectrum, technology-driven creative content production company, enabling the creation of holistic digital ecosystems that resonate with users on both functional and emotional levels.",
                            "Digital Media/Multimedia is integral to every industry, but each industry uses multimedia uniquely. That is to say, Cognivision not only uses digital media tools to enhance the sell but also to predict trend trajectories, hence giving brands a competitive advantage.",
                            "We believe multimedia is not just a medium—it is a Sensory Symphony that transforms passive audiences into active participants. In the absence of rich, immersive content, brands risk irrelevance, messages lose their potency, and stories remain unheard.",
                            'This understanding fuels our philosophy of "Emotive Immersion"—where every pixel, soundwave, and interaction is meticulously crafted to resonate with human emotion, dynamically adapt to its environment, and function as a living, evolving narrative.',
                        ]}
                    />
                    <Image src="https://placehold.co/400x500.png" alt="About" width={400} height={500} className="rounded-md w-full md:w-auto" />
                </div>
            </section>

            <section className="w-full bg-bottom-right md:bg-center px-4">
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 ">
                    <SectionIconLabel title="Visionary Media">
                        <Rocket size={20} />
                    </SectionIconLabel>

                    <div className="flex flex-col md:flex-row w-full items-start justify-between mt-4 gap-4 md:gap-0">
                        <AnimatedSectionTitle className="w-full md:w-1/2" animation="slideUp">
                            Our Signature Philosophy
                        </AnimatedSectionTitle>

                        <TextAnimate
                            className="text-base font-inter-tight mt-4 md:mt-0 leading-relaxed text-neutral-900 w-full md:w-1/2 max-w-xl tracking-wider"
                            animation="slideUp"
                            delay={0.5}
                        >
                            Cognivision reimagines multimedia through the lens of &ldquo;Visionary Media.&rdquo; Like a living story, our content and solutions adapt, evolve, and
                            interact dynamically with their audiences, ensuring brands not only stand out but also thrive in a competitive digital landscape. This vision of
                            multimedia as a transformative, living entity positions Cognivision as a trailblazer in the multimedia industry.
                        </TextAnimate>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto my-4 md:my-8 h-[60vh] md:h-[90vh] min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden flex flex-col">
                    <HoverCard
                        backgroundImage="/about-us/our-values-1.jpg"
                        title="Crafting Multimedia That Feels Alive"
                        description="We create multimedia experiences that mimic the adaptability of living systems by integrating intelligent design principles. Our focus is on producing content—videos, animations, graphics, and interactive media—that evolves with audience preferences, learns from engagement data, and adjusts to remain relevant over time. This ensures our creations remain fresh and impactful."
                    />
                    <HoverCard
                        backgroundImage="/about-us/our-values-2.jpg"
                        title="Crafting Multimedia That Feels Alive"
                        description="We create multimedia experiences that mimic the adaptability of living systems by integrating intelligent design principles. Our focus is on producing content—videos, animations, graphics, and interactive media—that evolves with audience preferences, learns from engagement data, and adjusts to remain relevant over time. This ensures our creations remain fresh and impactful."
                    />
                </div>
            </section>

            <section className="w-full bg-bottom-right md:bg-center px-4">
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-[url('/about-us/our-trifecta.jpg')] bg-cover bg-center">
                    <div className="flex flex-col w-full items-start justify-center text-center mt-4">
                        <AnimatedSectionTitle className="w-full" animation="slideUp">
                            Our Trifecta
                        </AnimatedSectionTitle>

                        <TextAnimate
                            className="text-base font-inter-tight mt-4 md:mt-8 leading-relaxed text-neutral-900 w-full max-w-2xl mx-auto tracking-wider"
                            animation="slideUp"
                            delay={0.5}
                        >
                            At Cognivision, we combine creativity, technology, and user engagement to create cohesive multimedia ecosystems.
                        </TextAnimate>
                        <TextAnimate
                            className="text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl mx-auto tracking-wider"
                            animation="slideUp"
                            delay={0.5}
                        >
                            This trifecta allows us to build scalable, adaptable, and impactful solutions that maximize return on investment while captivating audiences.
                        </TextAnimate>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 max-w-sm mx-auto mt-6 md:mt-8">
                        <TrifectaItem highlightedText="Creativity" description="drives our storytelling" />
                        <TrifectaItem highlightedText="Technology" description="powers our delivery" />
                        <TrifectaItem highlightedText="Engagement" description="ensures our content resonates" />
                    </div>
                </div>
            </section>

            <section className="w-full md:bg-center px-4">
                <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                    <div className="max-w-7xl mx-auto my-4 md:my-8 h-[60vh] md:h-[90vh] min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden flex flex-col bg-[url('/about-us/our-values-2.jpg')] bg-cover bg-center">
                        <HoverCard
                            backgroundImage=""
                            title="Our Values"
                            description="Cognivision Media is a full-spectrum, technology-driven creative content production company, enabling the creation of holistic digital ecosystems that resonate with users on both functional and emotional levels."
                            className="bg-blue-500/90"
                        />
                        <HoverCard
                            backgroundImage=""
                            title="Our Values"
                            description="Cognivision Media is a full-spectrum, technology-driven creative content production company, enabling the creation of holistic digital ecosystems that resonate with users on both functional and emotional levels."
                            className="bg-blue-900/90"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full relative bg-gradient-to-b from-brand-primary to-brand-secondary h-fit min-h-[60vh] md:min-h-[90vh] _overflow-hidden">
                <div className="flex flex-col md:flex-row _items-center justify-between w-full h-full max-w-7xl mx-auto px-4">
                    <div className="w-full md:w-1/2 flex items-center sticky top-1/2 h-40 md:h-60 p-4 md:p-0">
                        <h2 className="text-xl md:text-2xl font-bold text-white font-bricolage">Our Values</h2>
                    </div>
                    <div className="w-full md:w-1/2 relative flex flex-col gap-3 md:gap-4 py-6 md:py-12">
                        <NumberedCard number={1} />
                        <NumberedCard number={2} />
                        <NumberedCard number={3} />
                        <NumberedCard number={4} />
                        <NumberedCard number={5} />
                        <NumberedCard number={6} />
                    </div>
                </div>
            </section>

            <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                <ContentCard
                    icon={Rocket}
                    iconTitle="About Us"
                    title="Who we are?"
                    paragraphs={[
                        "Cognivision Media is a full-spectrum, technology-driven creative content production company, enabling the creation of holistic digital ecosystems that resonate with users on both functional and emotional levels.",
                        "Digital Media/Multimedia is integral to every industry, but each industry uses multimedia uniquely. That is to say, Cognivision not only uses digital media tools to enhance the sell but also to predict trend trajectories, hence giving brands a competitive advantage.",
                        "We believe multimedia is not just a medium—it is a Sensory Symphony that transforms passive audiences into active participants. In the absence of rich, immersive content, brands risk irrelevance, messages lose their potency, and stories remain unheard.",
                        'This understanding fuels our philosophy of "Emotive Immersion"—where every pixel, soundwave, and interaction is meticulously crafted to resonate with human emotion, dynamically adapt to its environment, and function as a living, evolving narrative.',
                    ]}
                />
                <Image src="https://placehold.co/400x500.png" alt="About" width={400} height={500} className="rounded-md w-full md:w-auto" />
            </div>
        </main>
    );
};

export default AboutPage;
