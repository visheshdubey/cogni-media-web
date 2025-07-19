import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavHeader = () => {
    return (
        <header className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto">
            <div className="flex gap-2 items-center">
                <div className="size-6 bg-blue-200 rounded-full"></div>
                <h1 className="text-2xl font-bold text-white font-bricolage">CogniMedia</h1>
            </div>
            <nav className="max-w-lg w-full">
                <ul className="flex gap-8 text-white/90 font-semibold text-sm items-center justify-between">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact">Industries</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Button
                variant="outline"
                className="h-11 px-6 border-white/80 text-white/90 font-semibold text-sm bg-transparent hover:bg-brand-primary hover:text-white hover:border-brand-secondary"
            >
                <Link href="/login">Get in touch</Link>
            </Button>
        </header>
    );
};

export default NavHeader;
