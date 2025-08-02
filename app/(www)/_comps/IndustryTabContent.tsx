"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/lib/use-is-mobile";
import React, { useState } from "react";

// Tab data extracted to the top of the component
const industryTabsData = [
    {
        tabTitle: "E-commerce and retail industry",
        title: "E-commerce and retail industry",
        content: `
            The effective learning occurs when multiple senses are engaged, making learning more memorable and engaging. Laird's Sensory Theory posits that a
            significant portion of learning (75%) comes from visual stimulation, 13% from auditory input, and the remaining 12% is distributed across touch, taste, and
            smell.
            <br />
            <br />
            From structured process of learning to more general process of acquiring knowledge and skills. Throughout human history, across centuries, mankind has utilised
            multimedia in various forms for learning. In today's era, the role of multimedia has become increasingly significant because it enables the use of diverse
            learning models to gather maximum information and knowledge in minimal time.
            <br />
            <br />
            AI can analyse learner data in real-time and adapt content based on individual needs and preferences. This tailored approach improves the learning experience
            and achievement of learning objectives.
            <br />
            <br />
            AI-powered analytics tools offer instant feedback to learners. Areas of strength are highlighted alongside areas that need more work. Multimedia transforms
            traditional education, e-learning, and training into dynamic, personalised experiences, aligning with the demands of modern learners and technological
            advancements.
        `,
    },
    {
        tabTitle: "Fashion and luxury industry",
        title: "Fashion and luxury industry",
        content: `
            The fashion and luxury industry is embracing digital transformation through multimedia technologies that enhance brand storytelling and customer engagement.
            <br />
            <br />
            Virtual fashion shows and augmented reality fitting rooms are revolutionizing how consumers interact with luxury brands. AI-powered personalization
            algorithms create tailored shopping experiences that match individual style preferences and purchasing patterns.
            <br />
            <br />
            Digital platforms enable luxury brands to showcase their heritage and craftsmanship through immersive multimedia content, connecting with consumers
            on deeper emotional levels while maintaining exclusivity.
            <br />
            <br />
            Social media integration and influencer partnerships leverage multimedia content to create authentic brand narratives that resonate with target audiences
            and drive engagement across multiple channels.
        `,
    },
    {
        tabTitle: "Marketing and Advertising industry",
        title: "Marketing and Advertising industry",
        content: `
            The marketing and advertising industry has been fundamentally transformed by multimedia technologies, enabling more creative and targeted campaigns.
            <br />
            <br />
            Data-driven multimedia campaigns leverage AI analytics to understand consumer behavior and preferences, allowing for hyper-personalized advertising
            that increases engagement and conversion rates.
            <br />
            <br />
            Interactive video content, virtual reality experiences, and augmented reality applications create immersive brand experiences that leave lasting
            impressions on consumers and drive brand loyalty.
            <br />
            <br />
            Cross-platform multimedia strategies ensure consistent brand messaging across all touchpoints, from social media to traditional advertising channels,
            maximizing reach and impact while optimizing marketing budgets.
        `,
    },
    {
        tabTitle: "Healthcare and Medical Training",
        title: "Healthcare and Medical Training",
        content: `
            Healthcare and medical training is leveraging multimedia technologies to create more effective and accessible learning experiences for medical professionals.
            <br />
            <br />
            Virtual reality simulations provide realistic training scenarios for surgical procedures, emergency responses, and patient interactions, allowing
            medical students and professionals to practice in safe, controlled environments.
            <br />
            <br />
            AI-powered diagnostic training tools help medical professionals develop their skills in identifying diseases and conditions through interactive
            case studies and real-time feedback systems.
            <br />
            <br />
            Telemedicine training programs prepare healthcare providers for remote patient care, ensuring they can effectively use digital platforms to deliver
            quality healthcare services in various settings.
        `,
    },
    {
        tabTitle: "Education, E-Learning and training",
        title: "Education, E-Learning and training",
        content: `
            The education sector has been transformed by multimedia technologies, creating more engaging and effective learning experiences for students of all ages.
            <br />
            <br />
            Interactive multimedia content, including videos, animations, and simulations, helps students grasp complex concepts more easily. AI-powered adaptive
            learning systems personalize educational content based on individual learning styles and progress.
            <br />
            <br />
            Virtual classrooms and online learning platforms have made education more accessible globally, breaking down geographical barriers and providing
            flexible learning schedules.
            <br />
            <br />
            Gamification elements in educational multimedia content increase student engagement and motivation, leading to better retention and understanding of
            subject matter.
        `,
    },
    {
        tabTitle: "Manufacturing & Industrial Design",
        title: "Manufacturing & Industrial Design",
        content: `
            Manufacturing and industrial design are being revolutionized by multimedia technologies that enhance product development and production processes.
            <br />
            <br />
            Computer-aided design (CAD) software combined with virtual reality enables designers to create and test products in immersive 3D environments before
            physical prototyping, reducing development time and costs.
            <br />
            <br />
            Augmented reality applications provide real-time guidance for assembly processes, quality control, and maintenance procedures, improving efficiency
            and reducing errors in manufacturing operations.
            <br />
            <br />
            Digital twin technology creates virtual replicas of manufacturing systems, allowing for predictive maintenance, process optimization, and continuous
            improvement through real-time monitoring and analysis.
        `,
    },
];

const IndustryTabContent = () => {
    const { isMobile } = useIsMobile({ breakpoint: 768, includeTablet: true });

    if (isMobile) {
        return <IndustryTabContentMobile />;
    }

    return <IndustryTabContentDesktop />;
};

const IndustryTabContentMobile = () => {
    return (
        <div className="w-full mt-16 md:mt-24 border-t border-[#66C2FF]/50">
            <Accordion type="single" collapsible className="w-full">
                {industryTabsData.map((tab, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-[#66C2FF]/50">
                        <AccordionTrigger className="text-white hover:text-white/80 text-left font-semibold text-lg py-4 hover:no-underline [&>svg]:text-white">
                            {tab.tabTitle}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5">
                            {/* <h3 className="text-white text-xl font-semibold mb-4">{tab.title}</h3> */}
                            <div className="text-base font-inter-tight leading-relaxed text-white/80 tracking-wider" dangerouslySetInnerHTML={{ __html: tab.content }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

const IndustryTabContentDesktop = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="w-full mt-16 md:mt-24  border-t flex flex-col md:flex-row border-[#66C2FF]/50 min-h-[500px]">
            <div className="w-full md:w-1/3 md:border-r border-[#66C2FF]/50 md:border-b-0 border-b  flex-1 md:flex-col flex scrollbar-none overflow-x-auto md:overflow-x-hidden">
                {industryTabsData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`text-start w-full px-4 py-5 font-semibold md:text-lg whitespace-nowrap md:border-0 border-r last:border-r-0 border-white/10 ${
                            activeTab === index ? "bg-gradient-to-r from-white/10 to-white/30 text-white" : "text-white"
                        }`}
                    >
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className="w-full md:w-2/3 h-full py-5 md:px-4 flex flex-col">
                <h3 className="text-white text-xl font-semibold">{industryTabsData[activeTab].title}</h3>
                <div
                    className="text-base font-inter-tight leading-relaxed text-white/80 mt-4 w-full tracking-wider"
                    dangerouslySetInnerHTML={{ __html: industryTabsData[activeTab].content }}
                />
            </div>
        </div>
    );
};

export default IndustryTabContent;
