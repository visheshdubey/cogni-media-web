import React from "react";

interface NumberedCardProps {
    number: number;
    className?: string;
    children?: React.ReactNode;
}

const NumberedCard: React.FC<NumberedCardProps> = ({ number, className = "", children }) => {
    return (
        <div className={`w-full h-fit bg-white rounded-2xl relative ${className}`}>
            <span className="text-[80px] md:text-[120px] font-bold text-brand-primary/30 absolute right-2 md:right-4 w-[1ch] text-center">{number}</span>
            <div className="z-10">{children}</div>
        </div>
    );
};

export default NumberedCard;
