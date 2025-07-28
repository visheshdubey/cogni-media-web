import React from "react";

interface NumberedCardProps {
  number: number;
  className?: string;
  children?: React.ReactNode;
}

const NumberedCard: React.FC<NumberedCardProps> = ({
  number,
  className = "",
  children,
}) => {
  return (
    <div className={`w-full h-40 bg-white rounded-2xl relative ${className}`}>
      <span className="text-[120px] font-bold text-brand-primary/30 absolute right-4 w-[1ch] text-center">
        {number}
      </span>
      {children}
    </div>
  );
};

export default NumberedCard; 