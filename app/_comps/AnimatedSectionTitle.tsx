import { cn } from "@/lib/utils";
import { AnimationVariant, TextAnimate2 } from "@/components/magicui/text-animate-2";
import React from "react";

type Props = {
    children: string;
    className?: string;
    animation?: AnimationVariant;
};

const AnimatedSectionTitle = ({ children, className, animation = "blurInUp" }: Props) => {
    return (
        <TextAnimate2 animation={animation} duration={0.5} as="h1" className={cn("text-3xl md:text-5xl font-bricolage font-semibold leading-tight", className)}>
            {children}
        </TextAnimate2>
    );
};

export default AnimatedSectionTitle;
