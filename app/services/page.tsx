import React from "react";
import ServicesHeroCarousel from "./_comps/ServicesHeroCarousel";
import AnimatedSectionTitle from "../_comps/AnimatedSectionTitle";
import SectionGetInTouch from "../(www)/_comps/SectionGetInTouch";
import ServiceSection from "./_comps/ServiceSection";
import ServiceGrid from "./_comps/ServiceGrid";

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

                    <ServiceSection
                        number="01"
                        title="Photography and Post-Production Services"
                        description="Cognivision Media ensures your imagery conveys value, quality, and trust from the very first glance. From the lens to the final pixel, we craft visual experiences that make your brand stand out in the crowded e-commerce space."
                        learnMoreHref="/services/photography-and-post-production-services"
                    >
                        <ServiceGrid services={services} />
                    </ServiceSection>

                    <ServiceSection
                        number="02"
                        title="Creative Direction"
                        description="Our Creative Direction service is a strategic partnership that ensures your brand's visual identity is consistent, impactful, and authentically aligned with your business goals. We don't just create content—we craft a narrative that resonates with your audience, driving engagement and loyalty."
                        learnMoreHref="/services/creative-direction"
                    >
                        <ServiceGrid services={services.slice(0, 4)} />
                    </ServiceSection>
                </div>
            </section>

            <SectionGetInTouch />
        </main>
    );
};

export default ServiceListPage;
