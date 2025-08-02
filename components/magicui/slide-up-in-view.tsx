"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";
import React, { ElementType, memo, ReactNode } from "react";

interface SlideUpInViewProps extends MotionProps {
    /**
     * The children to animate
     */
    children: ReactNode;
    /**
     * The class name to be applied to the component
     */
    className?: string;
    /**
     * The delay before the animation starts
     */
    delay?: number;
    /**
     * The duration of the animation
     */
    duration?: number;
    /**
     * Custom motion variants for the animation
     */
    variants?: Variants;
    /**
     * The element type to render
     */
    as?: ElementType;
    /**
     * Whether to start animation when component enters viewport
     */
    startOnView?: boolean;
    /**
     * Whether to animate only once
     */
    once?: boolean;
    /**
     * The amount of stagger delay between children
     */
    staggerDelay?: number;
    /**
     * The initial y offset for the slide-up animation
     */
    yOffset?: number;
    /**
     * The initial opacity
     */
    initialOpacity?: number;
}

const defaultContainerVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const defaultItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: {
            duration: 0.3,
        },
    },
};

const SlideUpInViewBase = ({
    children,
    delay = 0,
    duration = 0.5,
    variants,
    className,
    as: Component = "div",
    startOnView = true,
    once = true,
    staggerDelay = 0.1,
    yOffset = 30,
    initialOpacity = 0,
    ...props
}: SlideUpInViewProps) => {
    const MotionComponent = motion.create(Component);

    const finalVariants = variants
        ? {
              container: {
                  hidden: { opacity: 1 },
                  show: {
                      opacity: 1,
                      transition: {
                          delayChildren: delay,
                          staggerChildren: staggerDelay,
                      },
                  },
                  exit: {
                      opacity: 0,
                      transition: {
                          staggerChildren: staggerDelay,
                          staggerDirection: -1,
                      },
                  },
              },
              item: variants,
          }
        : {
              container: {
                  ...defaultContainerVariants,
                  show: {
                      ...defaultContainerVariants.show,
                      transition: {
                          delayChildren: delay,
                          staggerChildren: staggerDelay,
                      },
                  },
              },
              item: {
                  hidden: {
                      opacity: initialOpacity,
                      y: yOffset,
                  },
                  show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                          duration,
                          ease: [0.25, 0.46, 0.45, 0.94],
                      },
                  },
                  exit: {
                      opacity: initialOpacity,
                      y: yOffset,
                      transition: {
                          duration: duration * 0.6,
                      },
                  },
              },
          };

    return (
        <AnimatePresence mode="popLayout">
            <MotionComponent
                variants={finalVariants.container as Variants}
                initial="hidden"
                whileInView={startOnView ? "show" : undefined}
                animate={startOnView ? undefined : "show"}
                exit="exit"
                className={cn("", className)}
                viewport={{ once, margin: "-50px" }}
                {...props}
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div key={`slide-up-item-${index}`} variants={finalVariants.item as Variants} custom={index * staggerDelay}>
                        {child}
                    </motion.div>
                ))}
            </MotionComponent>
        </AnimatePresence>
    );
};

// Export the memoized version
export const SlideUpInView = memo(SlideUpInViewBase);
