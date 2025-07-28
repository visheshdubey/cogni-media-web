import React from "react";

interface HoverCardProps {
    backgroundImage: string;
    title: string;
    description: string;
    className?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ backgroundImage, title, description, className = "" }) => {
    return (
        <div className={`group w-full h-1/2 bg-blue-500 flex items-center justify-center bg-cover bg-center ${className}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="p-4 w-full h-full flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-white font-bricolage transition-transform duration-500 ease-in-out translate-y-12 group-hover:translate-y-0">{title}</h2>
                <p className="text-base font-inter-tight leading-relaxed tracking-wider text-white/80 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-opacity duration-500 ease-in-out">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HoverCard;
