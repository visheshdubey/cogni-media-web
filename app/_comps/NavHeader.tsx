"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const NavHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNotRootPath, setIsNotRootPath] = useState(false);

    useEffect(() => {
        // Check if we're not on the root path
        const checkPath = () => {
            setIsNotRootPath(window.location.pathname !== "/");
        };

        // Check on mount
        checkPath();

        // Listen for route changes
        const handleRouteChange = () => {
            checkPath();
        };

        window.addEventListener("popstate", handleRouteChange);

        // For Next.js client-side navigation, we can also listen to the history API
        const originalPushState = history.pushState;
        history.pushState = function (...args) {
            originalPushState.apply(history, args);
            checkPath();
        };

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
            history.pushState = originalPushState;
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Show scrolled variant if not on root path OR if scrolled past viewport height
            if (isNotRootPath || scrollPosition > viewportHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isNotRootPath]);

    return (
        <div className={`w-full fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-white/80 backdrop-blur-sm _shadow-lg/5" : "bg-transparent"}`}>
            <header className={`flex justify-between items-center p-4  max-w-7xl mx-auto transition-all duration-300 `}>
                <div className="flex gap-2 items-center">
                    <div className={`size-6 rounded-full transition-colors duration-300 ${isScrolled ? "bg-blue-400" : "bg-blue-200"}`}></div>
                    <h1 className={`text-2xl font-bold font-bricolage transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}>CogniMedia</h1>
                </div>
                <nav className="hidden lg:block max-w-sm lg:max-w-md xl:max-w-lg w-full">
                    <ul className="flex gap-8 font-semibold text-sm items-center justify-between">
                        <li>
                            <Link href="/" className={`transition-colors duration-300 hover:opacity-80 ${isScrolled ? "text-black" : "text-white/90"}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={`transition-colors duration-300 hover:opacity-80 ${isScrolled ? "text-black" : "text-white/90"}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={`transition-colors duration-300 hover:opacity-80 ${isScrolled ? "text-black" : "text-white/90"}`}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={`transition-colors duration-300 hover:opacity-80 ${isScrolled ? "text-black" : "text-white/90"}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className={`transition-colors duration-300 hover:opacity-80 ${isScrolled ? "text-black" : "text-white/90"}`}>
                                Careers
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Button
                    variant="outline"
                    className={`h-11 hidden lg:flex px-6 font-semibold text-sm transition-all duration-300 ${
                        isScrolled
                            ? "border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white"
                            : "border-white/80 text-white/90 bg-transparent hover:bg-brand-primary hover:text-white hover:border-brand-secondary"
                    }`}
                >
                    <Link href="/login">Get in touch</Link>
                </Button>

                <Sheet>
                    <SheetTrigger className="lg:hidden">
                        <AlignJustify className={`transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`} />
                    </SheetTrigger>
                    <SheetContent className="bg-black/60 border-none [&>svg]:text-white pt-12">
                        <ul className="flex flex-col gap-8 text-white/90 font-semibold text-2xl font-bricolage items-center justify-between">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link href="/careers">Careers</Link>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
};

export default NavHeader;
