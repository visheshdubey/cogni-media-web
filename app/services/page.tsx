import React from "react";
import ServicesHeroCarousel from "./_comps/ServicesHeroCarousel";
import ContentCard from "@/components/ui/content-card";
import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";
import AnimatedSectionTitle from "../_comps/AnimatedSectionTitle";
import Link from "next/link";
import ServiceCard from "@/components/ui/service-card";
import { SlideUpInView } from "@/components/magicui/slide-up-in-view";
import SectionGetInTouch from "../(www)/_comps/SectionGetInTouch";

const ServiceListPage = () => {
    const services = [
        {
            title: "Product Photography",
            href: "/services/photography-and-post-production-services",
            imageSrc: "/home/home-section-services-1.jpg",
            badge: "Studio",
        },
        {
            title: "Post-Production & Retouching",
            href: "/services/photography-and-post-production-services",
            imageSrc: "/home/home-section-services-2.jpg",
            badge: "Edit Lab",
        },
        {
            title: "Creative Direction",
            href: "/services/creative-direction",
            imageSrc: "/about-us/who-we-are.jpg",
            badge: "Strategy",
        },
        {
            title: "Video Production",
            href: "/services/video-production",
            imageSrc: "/home/hero-slide-2.jpg",
            badge: "Motion",
        },
        {
            title: "3D & CGI",
            href: "/services/3d-and-cgi",
            imageSrc: "https://placehold.co/800x1000.png",
            badge: "CGI",
        },
        {
            title: "UI/UX for Campaigns",
            href: "/services/ui-ux",
            imageSrc: "/home/home-section-why-choose-us-bg.jpg",
            badge: "Digital",
        },
        {
            title: "Brand Identity",
            href: "/services/brand-identity",
            imageSrc: "/about-us/our-values-2.jpg",
            badge: "Design",
        },
        {
            title: "Social Content",
            href: "/services/social-content",
            imageSrc: "https://placehold.co/800x1000.png",
            badge: "Always-on",
        },
    ];
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <section className="relative w-full min-h-fit pt-32 md:pt-44 pb-12">
                <div className="absolute rotate-180 top-0 z-10 inset-x-0 bg-[url('/home/home-section-about-us-bg.jpg')] bg-cover bg-bottom w-full h-full"></div>
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-brand-secondary font-bricolage mx-auto w-fit">Services</h1>
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0">
                    <ServicesHeroCarousel />
                </div>
            </section>

            <section className="bg-[#5bb4ff]/20 w-full">
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

            <section className="w-full">
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10 flex flex-col">
                    <AnimatedSectionTitle className="w-full mt-4 text-center" animation="slideUp">
                        Our Creative Stack
                    </AnimatedSectionTitle>

                    <div className="flex w-full items-center justify-between mt-20">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-brand-secondary">Photography and Post-Production Services</h2>
                            <p className="text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl mx-auto tracking-wider">
                                Cognivision Media ensures your imagery conveys value, quality, and trust from the very first glance. From the lens to the final pixel, we craft
                                visual experiences that make your brand stand out in the crowded e-commerce space.
                            </p>
                            <Link
                                href="/services/photography-and-post-production-services"
                                className="mt-4 text-sm font-semibold text-brand-secondary hover:underline flex items-center gap-2"
                            >
                                <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <span className="text-brand-secondary/30 text-[240px] font-black leading-none">01</span>
                    </div>

                    <SlideUpInView className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.title} title={service.title} href={service.href} imageSrc={service.imageSrc} badge={service.badge} />
                        ))}
                    </SlideUpInView>

                    {/* Creative Direction */}
                    <div className="flex w-full items-center justify-between mt-32">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold text-brand-secondary">Creative Direction</h2>
                            <p className="text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl mx-auto tracking-wider">
                                Our Creative Direction service is a strategic partnership that ensures your brand&apos;s visual identity is consistent, impactful, and authentically
                                aligned with your business goals. We don&apos;t just create content—we craft a narrative that resonates with your audience, driving engagement and
                                loyalty.
                            </p>
                            <Link href="/services/creative-direction" className="mt-4 text-sm font-semibold text-brand-secondary hover:underline flex items-center gap-2">
                                <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <span className="text-brand-secondary/30 text-[240px] font-black leading-none">02</span>
                    </div>

                    <SlideUpInView className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {services.slice(0, 4).map((service) => (
                            <ServiceCard key={service.title} title={service.title} href={service.href} imageSrc={service.imageSrc} badge={service.badge} />
                        ))}
                    </SlideUpInView>
                </div>
            </section>

            <SectionGetInTouch />
        </main>
    );
};

export default ServiceListPage;
