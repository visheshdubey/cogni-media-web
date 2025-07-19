"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }: { words: string; className?: string; filter?: boolean; duration?: number }) => {
    const [scope, animate] = useAnimate();
    const [animationKey, setAnimationKey] = useState(0);
    const wordsArray = words.split(" ");

    useEffect(() => {
        // Trigger animation by updating the key
        setAnimationKey((prev) => prev + 1);

        // Small delay to ensure DOM is updated
        const timer = setTimeout(() => {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.2),
                }
            );
        }, 50);

        return () => clearTimeout(timer);
    }, [words, animate, filter, duration]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} key={animationKey}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={`${word}-${idx}-${animationKey}`}
                            className="opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return <div className={cn(className)}>{renderWords()}</div>;
};
