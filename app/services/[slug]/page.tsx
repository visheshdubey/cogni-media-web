import React from "react";
import { ServiceDetailSection } from "../_comps/ServiceDetailSection";

type Slide = {
    imageSrcA: string;
    imageSrcB: string;
    imageAlt?: string;
    tasks: string[];
};

type ServiceSection = {
    title: string;
    description: string;
    number: string; // e.g., "01"
    slides: Slide[];
};

type ServicePageData = {
    pageTitle: string;
    sections: ServiceSection[];
};

const SERVICE_PAGES: Record<string, ServicePageData> = {
    "photography-and-post-production-services": {
        pageTitle: "Photography and Post-Production Services",
        sections: [
            {
                title: "Product Photography",
                number: "01",
                description:
                    "Cognivision Media ensures your imagery conveys value, quality, and trust from the very first glance. We craft visual experiences that help your brand stand out.",
                slides: [
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Studio product setup",
                        tasks: ["Studio lighting setup", "Multi-angle coverage", "Color accuracy calibration", "Raw processing pipeline"],
                    },
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Lifestyle composition",
                        tasks: ["Set design and props", "Model direction", "On-set tethering", "Client live review"],
                    },
                ],
            },
            {
                title: "Post-Production & Retouching",
                number: "02",
                description: "From cleanup to high-end beauty retouching and compositing, our edit lab produces consistent, on-brand assets at scale.",
                slides: [
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Retouching workstation",
                        tasks: ["Non-destructive retouching", "Background cleanup", "Shadow and reflection build", "Export presets per channel"],
                    },
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        imageAlt: "Color grading preview",
                        tasks: ["Batch color grading", "CMYK and sRGB variants", "Metadata embedding", "QC and versioning"],
                    },
                ],
            },
        ],
    },
    // Skeleton for additional categories
    "creative-direction": {
        pageTitle: "Creative Direction",
        sections: [
            {
                title: "Campaign Architecture",
                number: "01",
                description: "Narrative-first blueprints aligning messaging, visuals, and channels to business outcomes.",
                slides: [
                    {
                        imageSrcA: "https://placehold.co/600x400/D9D9D9/FFFFFF",
                        imageSrcB: "https://placehold.co/600x400/000000/FFFFFF",
                        tasks: ["Audience mapping", "Concept boards", "Channel strategy", "KPI alignment"],
                    },
                ],
            },
        ],
    },
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

const ServicesDetailPage: React.FC<PageProps> = async ({ params }) => {
    const { slug } = await params;
    const data = SERVICE_PAGES[slug];

    if (!data) {
        return (
            <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-brand-secondary font-bricolage">Service Not Found</h1>
                <p className="mt-4 text-neutral-700">We could not find details for this service.</p>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            {/* Top banner: reuse Services page gradient + title style */}
            <section className="relative w-full min-h-fit pt-32 md:pt-44 pb-12">
                <div className="absolute rotate-180 top-0 z-10 inset-x-0 bg-[url('/home/home-section-about-us-bg.jpg')] bg-cover bg-bottom w-full h-full" />
                <h1 className="relative z-20 text-4xl md:text-6xl font-bold text-brand-secondary font-bricolage mx-auto w-fit">{data.pageTitle}</h1>
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-12 md:pt-20" />
            </section>

            {/* Sections for each specific service in this category */}
            <section className="w-full">
                <div className="relative z-20 max-w-7xl mx-auto px-4 pt-6 md:pt-10 pb-20 flex flex-col gap-24">
                    {data.sections.map((section, index) => (
                        <ServiceDetailSection key={section.title} section={section} index={index} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ServicesDetailPage;
