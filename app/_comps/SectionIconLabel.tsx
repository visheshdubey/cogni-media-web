import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    children: React.ReactNode;
    title: string;
    className?: string;
};

const SectionIconLabel = ({ children, title, className }: Props) => {
    return (
        <div className={cn("flex gap-3 items-center justify-center w-fit h-fit", className)}>
            <div className="flex items-center size-11 bg-brand-primary/10 rounded-lg [&>svg]:size-5 justify-center [&>svg]:text-brand-primary">{children}</div>
            <h3 className="text-base font-semibold font-inter-tight text-brand-secondary">{title}</h3>
        </div>
    );
};

export default SectionIconLabel;
