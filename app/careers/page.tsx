import React from "react";
import { Rocket } from "lucide-react";
import ContentCard from "@/components/ui/content-card";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
    return (
        <main>
            <section className="relative w-full min-h-screen pt-32 md:pt-44">
                <div className="absolute rotate-180 top-0 z-10 inset-x-0 bg-[url('/home/home-section-about-us-bg.jpg')] bg-cover bg-bottom w-full h-full"></div>
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-brand-secondary font-bricolage mx-auto w-fit">Careers</h1>
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10 flex flex-col gap-8 md:gap-0 bg-white rounded-3xl mt-12">
                    <ContentCard
                        icon={Rocket}
                        iconTitle="Careers"
                        title="Elevate your career"
                        className="md:w-full"
                        paragraphs={[
                            "We’re a home for visual dreamers, motion artists, code whisperers, brand storytellers, and creative technologists.",
                            "If you’re passionate about turning pixels into powerful narratives and want to be part of a culture that thrives on originality, agility, and emotion-driven innovation—this is your space.",
                        ]}
                    />
                    <Button type="submit" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white w-fit ml-8">
                        Email your profile
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
