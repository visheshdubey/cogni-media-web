import { AnimationVariant } from "@/components/magicui/text-animate-2";
import { SlideUpInView } from "@/components/magicui/slide-up-in-view";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationVariant;
};

const AnimatedSectionTitle = ({ children, className }: Props) => {
    return (
        <SlideUpInView delay={0.3} className={cn("text-3xl md:text-5xl font-bricolage font-semibold leading-tight", className)}>
            <h2>{children}</h2>
        </SlideUpInView>
    );
};

export default AnimatedSectionTitle;
