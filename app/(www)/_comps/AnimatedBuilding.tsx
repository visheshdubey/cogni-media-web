"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";

const AnimatedBuilding = ({ className, delay = 0 }: { className?: string; delay?: number }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                staggerChildren: 0.1,
                delayChildren: 0.1 + delay,
            },
        },
    };

    const buildingVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
    };

    const windowVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: easeOut,
            },
        },
    };

    return (
        <motion.svg
            width={310}
            height={291}
            viewBox="0 0 310 291"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={className}
        >
            {/* big building bg */}
            <motion.rect width={158} height={291} rx={12} fill="url(#paint0_linear_0_1)" variants={buildingVariants} />

            {/* small building bg */}
            <motion.rect x={158} y={50} width={76} height={290} rx={16} fill="url(#paint1_linear_0_1)" variants={buildingVariants} />

            {/* big build windows */}
            <motion.rect x={66} y={91} width={37} height={46} rx={8} transform="rotate(-180 66 91)" fill="url(#paint2_linear_0_1)" variants={windowVariants} />
            <motion.rect x={129} y={91} width={37} height={46} rx={8} transform="rotate(-180 129 91)" fill="url(#paint3_linear_0_1)" variants={windowVariants} />
            <motion.rect x={66} y={162} width={37} height={46} rx={8} transform="rotate(-180 66 162)" fill="url(#paint4_linear_0_1)" variants={windowVariants} />
            <motion.rect x={129} y={162} width={37} height={46} rx={8} transform="rotate(-180 129 162)" fill="url(#paint5_linear_0_1)" variants={windowVariants} />

            {/* small building window */}
            <motion.rect x={188} y={116} width={18} height={23} rx={4} transform="rotate(-180 188 116)" fill="url(#paint6_linear_0_1)" variants={windowVariants} />
            <motion.rect x={188} y={148} width={18} height={23} rx={4} transform="rotate(-180 188 148)" fill="url(#paint7_linear_0_1)" variants={windowVariants} />
            <motion.rect x={221} y={116} width={18} height={23} rx={4} transform="rotate(-180 221 116)" fill="url(#paint8_linear_0_1)" variants={windowVariants} />
            <motion.rect x={221} y={148} width={18} height={23} rx={4} transform="rotate(-180 221 148)" fill="url(#paint9_linear_0_1)" variants={windowVariants} />

            <defs>
                <linearGradient id="paint0_linear_0_1" x1={79} y1={0} x2={79} y2={291} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0.2} />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1={196} y1={101} x2={196} y2={291} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0.3} />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="paint2_linear_0_1" x1={84.5} y1={91} x2={84.5} y2={137} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint3_linear_0_1" x1={147.5} y1={91} x2={147.5} y2={137} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint4_linear_0_1" x1={84.5} y1={162} x2={84.5} y2={208} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint5_linear_0_1" x1={147.5} y1={162} x2={147.5} y2={208} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint6_linear_0_1" x1={197} y1={116} x2={197} y2={139} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint7_linear_0_1" x1={197} y1={148} x2={197} y2={171} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint8_linear_0_1" x1={230} y1={116} x2={230} y2={139} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
                <linearGradient id="paint9_linear_0_1" x1={230} y1={148} x2={230} y2={171} gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity={0} />
                    <stop offset={1} stopColor="white" stopOpacity={0.16} />
                </linearGradient>
            </defs>
        </motion.svg>
    );
};

export default AnimatedBuilding;
