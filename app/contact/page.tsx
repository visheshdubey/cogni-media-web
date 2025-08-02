import React from "react";
import { Rocket } from "lucide-react";
import ContentCard from "@/components/ui/content-card";
import { ContactForm } from "@/components/ui/contact-form";

const ContactPage = () => {
    return (
        <main>
            <section className="relative w-full min-h-screen pt-32 md:pt-44">
                <div className="absolute rotate-180 top-0 z-10 inset-x-0 bg-[url('/home/home-section-about-us-bg.jpg')] bg-cover bg-bottom w-full h-full"></div>
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-brand-secondary font-bricolage mx-auto w-fit">Contact Us</h1>
                <div className="relative bg-white rounded-3xl mt-12 z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
                    <ContentCard
                        icon={Rocket}
                        iconTitle="Contact Us"
                        title="Shaping the Future with Visionary Media"
                        paragraphs={[
                            "Cognivision Media is a full-spectrum, technology-driven creative content production company, enabling the creation of holistic digital ecosystems that resonate with users on both functional and emotional levels.",
                            "Digital Media/Multimedia is integral to every industry, but each industry uses multimedia uniquely. That is to say, Cognivision not only uses digital media tools to enhance the sell but also to predict trend trajectories, hence giving brands a competitive advantage.",
                            "We believe multimedia is not just a medium—it is a Sensory Symphony that transforms passive audiences into active participants. In the absence of rich, immersive content, brands risk irrelevance, messages lose their potency, and stories remain unheard.",
                            'This understanding fuels our philosophy of "Emotive Immersion"—where every pixel, soundwave, and interaction is meticulously crafted to resonate with human emotion, dynamically adapt to its environment, and function as a living, evolving narrative.',
                        ]}
                    />
                    <div className="w-full md:w-1/2 p-0 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary font-bricolage mb-6 w-full text-center">Get in touch</h2>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
