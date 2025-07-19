import * as React from "react";
import { cn } from "@/lib/utils";

interface CarouselIndicatorProps {
    label: string;
    isActive: boolean;
    progress: number;
    onClick: () => void;
    className?: string;
}

export function CarouselIndicator({ label, isActive, progress, onClick, className }: CarouselIndicatorProps) {
    return (
        <button onClick={onClick} className={cn("flex flex-col items-start cursor-pointer group transition-all duration-300", className)}>
            {/* Label */}
            <span className={cn("text-lg font-bold mb-6 transition-all duration-300", isActive ? "text-white" : "text-white/50 group-hover:text-white/75")}>{label}</span>

            {/* Progress Bar Container */}
            <div className="w-full h-2 bg-white/20 rounded-sm_ overflow-hidden group-hover:bg-white/30 transition-colors duration-300">
                {/* Progress Bar Fill */}
                <div
                    className={cn("h-full rounded-sm_ transition-all duration-1000 ease-out", isActive ? "bg-brand-primary" : "bg-white/10")}
                    style={{
                        width: isActive ? `${progress}%` : "0%",
                    }}
                />
            </div>
        </button>
    );
}
