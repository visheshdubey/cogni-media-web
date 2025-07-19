import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavHeader = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <div className="flex gap-2 items-center">
                <div className="size-6 bg-blue-200 rounded-full"></div>
                <h1 className="text-xl font-bold">CogniMedia</h1>
            </div>
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Button>
                <Link href="/login">Login</Link>
            </Button>
        </header>
    );
};

export default NavHeader;
