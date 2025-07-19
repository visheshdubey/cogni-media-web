import { cn } from "@/lib/utils";
import { TextAnimate } from "@/components/magicui/text-animate";
import React from "react";
import { AnimationVariant } from "@/components/magicui/text-animate-2";

type Props = {
    children: string;
    className?: string;
    animation?: AnimationVariant;
};

const AnimatedSectionTitle = ({ children, className, animation = "blurInUp" }: Props) => {
    return (
        <TextAnimate animation={animation} duration={0.5} as="h1" className={cn("text-3xl md:text-5xl font-bricolage font-semibold leading-tight", className)}>
            {children}
        </TextAnimate>
    );
};

export default AnimatedSectionTitle;
