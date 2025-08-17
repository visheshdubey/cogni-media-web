import React from "react";
import ServicesHeroCarousel from "./_comps/ServicesHeroCarousel";
import ContentCard from "@/app/_comps/content-card";
import { ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";
import AnimatedSectionTitle from "../_comps/AnimatedSectionTitle";
import Link from "next/link";
import ServiceCard from "@/app/services/_comps/service-card";
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
            <ServicesHeroCarousel />

            <section className="w-full">
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10 flex flex-col">
                    <AnimatedSectionTitle className="w-full mt-4 text-center" animation="slideUp">
                        Our Creative Stack
                    </AnimatedSectionTitle>

                    <div className="flex flex-col-reverse lg:flex-row w-full items-start lg:items-center justify-between mt-20 gap-8 lg:gap-0">
                        <div className="flex flex-col flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-brand-secondary">Photography and Post-Production Services</h2>
                            <p className="text-sm md:text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl tracking-wider">
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
                        <span className="text-brand-secondary/30 text-6xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[240px] font-black leading-none self-center lg:self-auto">
                            01
                        </span>
                    </div>

                    <SlideUpInView className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.title} title={service.title} href={service.href} imageSrc={service.imageSrc} badge={service.badge} />
                        ))}
                    </SlideUpInView>

                    <div className="flex flex-col-reverse lg:flex-row w-full items-start lg:items-center justify-between mt-20 gap-8 lg:gap-0">
                        <div className="flex flex-col flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-brand-secondary">Creative Direction</h2>
                            <p className="text-sm md:text-base font-inter-tight mt-4 md:mt-2 leading-relaxed text-neutral-900 w-full max-w-2xl tracking-wider">
                                Our Creative Direction service is a strategic partnership that ensures your brand&apos;s visual identity is consistent, impactful, and authentically
                                aligned with your business goals. We don&apos;t just create content—we craft a narrative that resonates with your audience, driving engagement and
                                loyalty.
                            </p>
                            <Link href="/services/creative-direction" className="mt-4 text-sm font-semibold text-brand-secondary hover:underline flex items-center gap-2">
                                <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <span className="text-brand-secondary/30 text-6xl sm:text-8xl md:text-[120px] lg:text-[180px] xl:text-[240px] font-black leading-none self-center lg:self-auto">
                            02
                        </span>
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
