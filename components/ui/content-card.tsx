import React from "react";
import SectionIconLabel from "@/app/_comps/SectionIconLabel";
import AnimatedSectionTitle from "@/app/_comps/AnimatedSectionTitle";
import { LucideIcon } from "lucide-react";

interface ContentCardProps {
    icon: LucideIcon;
    iconTitle: string;
    title: string;
    paragraphs: string[];
    className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ icon: Icon, iconTitle, title, paragraphs, className = "" }) => {
    return (
        <div className={`group w-full md:w-1/2 bg-white rounded-md p-4 md:p-8 ${className}`}>
            <SectionIconLabel title={iconTitle}>
                <Icon size={20} />
            </SectionIconLabel>

            <AnimatedSectionTitle className="mt-4" animation="slideUp">
                {title}
            </AnimatedSectionTitle>

            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base font-inter-tight leading-relaxed tracking-wider text-neutral-900 mt-2 md:mt-4">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default ContentCard;
