import React from "react";

interface TrifectaItemProps {
    highlightedText: string;
    description: string;
    className?: string;
}

const TrifectaItem: React.FC<TrifectaItemProps> = ({ highlightedText, description, className = "" }) => {
    return (
        <span className={`p-3 md:p-4 bg-white rounded-md w-full text-center text-sm md:text-base ${className}`}>
            <span className="text-brand-secondary font-semibold">{highlightedText} </span>
            {description}
        </span>
    );
};

export default TrifectaItem;
