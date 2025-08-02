import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "./_comps/NavHeader";
import Footer from "./(www)/_comps/Footer";
import { WEBSITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
    metadataBase: new URL(WEBSITE_URL),
    alternates: {
        canonical: "/",
    },
    title: {
        default: "Cognivision Digital Media Services",
        template: "%s | Cognivision Digital Media Services",
    },
    description: "Cognivision Digital Media Services is a digital media services company.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Geist:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="min-h-screen font-body">
                <NavHeader />
                {children}
                <Footer />
            </body>
        </html>
    );
}
