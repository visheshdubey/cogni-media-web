"use client";

import { useState, useEffect } from "react";

interface UseIsMobileOptions {
    breakpoint?: number;
    includeTablet?: boolean;
}

interface UseIsMobileReturn {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    screenWidth: number;
    screenHeight: number;
}

/**
 * React hook to detect mobile devices and screen dimensions
 * Uses Tailwind CSS default breakpoints:
 * - sm: 640px
 * - md: 768px (default mobile breakpoint)
 * - lg: 1024px (tablet breakpoint)
 * - xl: 1280px
 * - 2xl: 1536px
 *
 * @param options - Configuration options for the hook
 * @param options.breakpoint - Custom breakpoint in pixels (default: 768px to match Tailwind's md breakpoint)
 * @param options.includeTablet - Whether to include tablets in mobile detection (default: true)
 * @returns Object containing device type flags and screen dimensions
 */
export function useIsMobile(options: UseIsMobileOptions = {}): UseIsMobileReturn {
    // Default to Tailwind's md breakpoint (768px)
    const { breakpoint = 768, includeTablet = true } = options;

    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [screenHeight, setScreenHeight] = useState<number>(0);

    useEffect(() => {
        // Set initial values
        const updateScreenSize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        // Update on mount
        updateScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", updateScreenSize);

        // Cleanup event listener
        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);

    // Calculate device types based on screen width using Tailwind breakpoints
    // Mobile: <= 768px (md breakpoint)
    const isMobile = screenWidth <= breakpoint;
    // Tablet: > 768px and < 1024px (between md and lg breakpoints)
    const isTablet = screenWidth > breakpoint && screenWidth < 1024;
    // Desktop: >= 1024px (lg breakpoint and above)
    const isDesktop = screenWidth >= 1024;

    // Return mobile status based on includeTablet option
    const mobileStatus = includeTablet ? isMobile || isTablet : isMobile;

    return {
        isMobile: mobileStatus,
        isTablet,
        isDesktop,
        screenWidth,
        screenHeight,
    };
}

/**
 * Simplified hook that only returns mobile status
 * Uses Tailwind's md breakpoint (768px) by default
 *
 * @param breakpoint - Custom breakpoint in pixels (default: 768px to match Tailwind's md breakpoint)
 * @returns Boolean indicating if device is mobile
 */
export function useIsMobileSimple(breakpoint: number = 768): boolean {
    const { isMobile } = useIsMobile({ breakpoint, includeTablet: true });
    return isMobile;
}

/**
 * Hook to detect if device has touch capabilities
 * @returns Boolean indicating if device supports touch
 */
export function useIsTouchDevice(): boolean {
    const [isTouch, setIsTouch] = useState<boolean>(false);

    useEffect(() => {
        const checkTouchSupport = () => {
            setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };

        checkTouchSupport();
    }, []);

    return isTouch;
}

/**
 * Hook to detect device orientation
 * @returns Object containing orientation information
 */
export function useDeviceOrientation() {
    const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");

    useEffect(() => {
        const updateOrientation = () => {
            setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");
        };

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => {
            window.removeEventListener("resize", updateOrientation);
        };
    }, []);

    return orientation;
}
